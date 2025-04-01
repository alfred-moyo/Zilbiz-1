const { ObjectId } = require('mongodb');
const bcrypt = require('bcryptjs');

class Admin {
  constructor(db) {
    this.collection = db.collection('admins');
  }

  /**
   * Create a new admin with hashed password
   */
  async createAdmin({ email, password, name }) {
    try {
      // Check if admin already exists
      const existingAdmin = await this.findAdminByEmail(email);
      if (existingAdmin) {
        return { success: false, error: 'Email already in use' };
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newAdmin = {
        email,
        password: hashedPassword,
        name,
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
        lastLogin: null
      };

      const result = await this.collection.insertOne(newAdmin);
      return { 
        success: true, 
        data: { 
          id: result.insertedId,
          email,
          name,
          role: 'admin'
        }
      };

    } catch (error) {
      console.error('Admin creation error:', error);
      return { success: false, error: 'Database operation failed' };
    }
  }

  /**
   * Find admin by email
   */
  async findAdminByEmail(email) {
    return await this.collection.findOne({ email });
  }

  /**
   * Verify admin credentials
   */
  async verifyAdmin(email, password) {
    try {
      const admin = await this.findAdminByEmail(email);
      if (!admin) return { success: false, error: 'Admin not found' };

      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) return { success: false, error: 'Invalid credentials' };

      // Update last login
      await this.collection.updateOne(
        { _id: admin._id },
        { $set: { lastLogin: new Date() } }
      );

      return { 
        success: true,
        data: {
          id: admin._id,
          email: admin.email,
          name: admin.name,
          role: admin.role
        }
      };
    } catch (error) {
      console.error('Admin verification error:', error);
      return { success: false, error: 'Verification failed' };
    }
  }

  /**
   * Get all admins (for super admin use)
   */
  async getAllAdmins() {
    try {
      return await this.collection.find(
        {},
        { projection: { password: 0 } } // Exclude passwords
      ).toArray();
    } catch (error) {
      console.error('Error fetching admins:', error);
      return [];
    }
  }

  /**
   * Update admin profile
   */
  async updateAdmin(id, updateData) {
    try {
      // Remove sensitive fields if present
      delete updateData.password;
      delete updateData.role;

      const result = await this.collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { ...updateData, updatedAt: new Date() } }
      );

      return result.modifiedCount > 0
        ? { success: true }
        : { success: false, error: 'No changes made' };
    } catch (error) {
      console.error('Admin update error:', error);
      return { success: false, error: 'Update failed' };
    }
  }
}

module.exports = Admin;