const fs = require('fs');
const path = require('path');

// Simple JSX tag validator
function validateJSXTags(content) {
  const tagStack = [];
  const tagRegex = /<\/?([A-Za-z][A-Za-z0-9]*)\b[^>]*>/g;
  let match;
  let lineNumber = 1;
  const lines = content.split('\n');
  
  const errors = [];
  
  // Track line numbers
  let position = 0;
  
  while ((match = tagRegex.exec(content)) !== null) {
    const fullTag = match[0];
    const tagName = match[1];
    const isClosing = fullTag.startsWith('</');
    const isSelfClosing = fullTag.endsWith('/>');
    
    // Calculate line number
    while (position < match.index) {
      if (content[position] === '\n') lineNumber++;
      position++;
    }
    
    if (isSelfClosing) {
      // Self-closing tag, ignore
      continue;
    }
    
    if (!isClosing) {
      // Opening tag
      tagStack.push({ tag: tagName, line: lineNumber });
    } else {
      // Closing tag
      if (tagStack.length === 0) {
        errors.push(`Line ${lineNumber}: Unexpected closing tag </${tagName}>`);
      } else {
        const lastTag = tagStack.pop();
        if (lastTag.tag !== tagName) {
          errors.push(`Line ${lineNumber}: Expected </${lastTag.tag}> but found </${tagName}>. Opening tag at line ${lastTag.line}`);
          // Put the tag back for better error detection
          tagStack.push(lastTag);
        }
      }
    }
  }
  
  // Check for unclosed tags
  tagStack.forEach(({ tag, line }) => {
    errors.push(`Line ${line}: Unclosed tag <${tag}>`);
  });
  
  return errors;
}

// Read and validate the file
const filePath = path.join(__dirname, 'src/pages/branchen/SaasPrivacyDesignGuide.tsx');
const content = fs.readFileSync(filePath, 'utf8');

// Extract just the renderImplementation function
const renderImplStart = content.indexOf('const renderImplementation = () => (');
const renderImplEnd = content.indexOf('\n  );', renderImplStart) + 5;
const renderImplContent = content.substring(renderImplStart, renderImplEnd);

console.log('Validating renderImplementation function...\n');

const errors = validateJSXTags(renderImplContent);

if (errors.length > 0) {
  console.log('❌ JSX Validation Errors Found:');
  errors.forEach(error => console.log(`   ${error}`));
} else {
  console.log('✅ No JSX validation errors found!');
}

// Also check specific problem area
console.log('\n📍 Checking specific problem area (lines 1700-2045)...');
const problemAreaStart = 1700;
const lines = content.split('\n');
const problemArea = lines.slice(problemAreaStart - 1, 2045).join('\n');

const problemErrors = validateJSXTags(problemArea);
if (problemErrors.length > 0) {
  console.log('❌ Errors in problem area:');
  problemErrors.forEach(error => console.log(`   ${error}`));
}