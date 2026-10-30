import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'src', 'data');

const filesToSplit = [
  'assignment4_5.ts',
  'assignment7_8.ts',
  'assignment9_10.ts',
  'assignment11_13.ts',
  'assignment14_16.ts',
  'assignment17_19.ts',
  'assignment20_23.ts'
];

for (const file of filesToSplit) {
  const filePath = path.join(dataDir, file);
  if (!fs.existsSync(filePath)) continue;
  
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Find all export const ASSIGNMENT_X_QUESTIONS
  const regex = /export const (ASSIGNMENT_\d+_QUESTIONS): Question\[\] = \[([\s\S]*?)\];\n/g;
  
  let match;
  while ((match = regex.exec(content)) !== null) {
    const varName = match[1];
    const arrayContent = match[2];
    
    // Extract the number
    const numMatch = varName.match(/\d+/);
    if (numMatch) {
      const num = numMatch[0];
      const newFileName = `assignment${num}.ts`;
      const newFilePath = path.join(dataDir, newFileName);
      
      const newContent = `import { Question } from '../types';\n\nexport const ${varName}: Question[] = [${arrayContent}];\n`;
      fs.writeFileSync(newFilePath, newContent);
      console.log(`Created ${newFileName}`);
    }
  }
  
  // Delete the original combined file
  fs.unlinkSync(filePath);
  console.log(`Deleted ${file}`);
}
