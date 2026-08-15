import fs from 'fs';
import path from 'path';

const distPath = path.resolve(process.cwd(), 'dist');

function clearDir(dir) {
  if (!fs.existsSync(dir)) return;
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      try {
        fs.chmodSync(fullPath, 0o777);
      } catch (err) {
        // ignore chmod errors for individual files if non-existent
      }
      if (entry.isDirectory()) {
        clearDir(fullPath);
      } else {
        try {
          fs.unlinkSync(fullPath);
        } catch (err) {
          // ignore
        }
      }
    }
  } catch (err) {
    // ignore
  }

  try {
    fs.chmodSync(dir, 0o777);
    fs.rmSync(dir, { recursive: true, force: true, maxRetries: 10, retryDelay: 100 });
  } catch (err) {
    // ignore
  }
}

clearDir(distPath);
