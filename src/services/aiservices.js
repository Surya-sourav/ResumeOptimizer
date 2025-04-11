// server/src/services/cerebrasService.js
import Cerebras from '@cerebras/cerebras_cloud_sdk';
import dotenv from 'dotenv';
import { randomUUID } from 'crypto';

dotenv.config();

const cerebras = new Cerebras({
  apiKey: process.env.CEREBRAS_API_KEY,
});

export const generateRewrittenBullet = async (bulletPoint, tone) => {
  try {
    if (!process.env.CEREBRAS_API_KEY) {
      throw new Error('Cerebras API key is missing');
    }

    // Customize prompt based on tone
    let tonePrompt = '';
    
    switch (tone) {
      case 'action-oriented':
        tonePrompt = 'Use strong action verbs at the beginning and focus on dynamic achievements.';
        break;
      case 'recruiter-friendly':
        tonePrompt = 'Use industry-standard terminology, quantifiable results, and keywords that would appeal to recruiters and ATS systems.';
        break;
      case 'technical':
        tonePrompt = 'Emphasize technical skills, tools, and methodologies with specific technical terminology relevant to the field.';
        break;
      default:
        tonePrompt = 'Focus on clear achievements and results.';
    }

    // Build our prompt for rewriting the resume bullet
    const prompt = `
Rewrite the following resume bullet point to be more result-oriented and ${tone}.
${tonePrompt}
Format the bullet point to clearly show "achieved X by doing Y" where possible.
Make it concise, impactful, and highlight measurable results.

Original bullet point: "${bulletPoint}"

Rewritten bullet point:
    `;

    // Set up the message for Cerebras API
    const messages = [
      {
        role: "tool",
        content: prompt,
        tool_call_id: randomUUID(),
      },
    ];
    
    // Call the Cerebras API
    const response = await cerebras.chat.completions.create({
      messages,
      model: 'llama3.1-8b',
      stream: false,
      max_completion_tokens: 100,
      temperature: 0.7,
      top_p: 1,
    });

    // Extract and return the rewritten bullet point
    const rewrittenBullet = response.choices[0].message.content.trim();
    return rewrittenBullet;
  } catch (error) {
    console.error('Error generating rewritten bullet point:', error);
    throw new Error(`Failed to generate rewritten bullet point: ${error.message}`);
  }
};