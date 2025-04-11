// server/src/controllers/resumeController.js
import {generateRewrittenBullet} from '../services/aiservices.js';

export const rewriteResumeBullet = async (req, res) => {
  try {
    const { bulletPoint, tone } = req.body;
    
    if (!bulletPoint || !tone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Bullet point and tone are required' 
      });
    }
    
    const rewrittenBullet = await generateRewrittenBullet(bulletPoint, tone);
    
    return res.status(200).json({
      success: true,
      data: { rewrittenBullet }
    });
  } catch (error) {
    console.error('Error rewriting resume bullet:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to rewrite resume bullet',
      error: error.message
    });
  }
};