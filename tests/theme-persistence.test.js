// Simple test to check if theme switching functionality works correctly
// Run this in your browser console to verify theme persistence

function testThemePersistence() {
  console.log('Starting theme persistence test...');
  
  // Get the current theme
  const isDarkMode = document.documentElement.classList.contains('dark');
  console.log('Current theme:', isDarkMode ? 'dark' : 'light');
  
  // Toggle the theme
  if (isDarkMode) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    console.log('Switched to light theme');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    console.log('Switched to dark theme');
  }
  
  // Reload the page
  console.log('Reloading page to check persistence...');
  
  // Store the new theme for comparison after reload
  const newTheme = !isDarkMode ? 'dark' : 'light';
  sessionStorage.setItem('expectedTheme', newTheme);
  
  // Set a flag to check after reload
  sessionStorage.setItem('checkThemeAfterReload', 'true');
  
  // Reload the page
  location.reload();
}

// This function runs after reload to check if the theme persisted
function checkAfterReload() {
  if (sessionStorage.getItem('checkThemeAfterReload') === 'true') {
    const expectedTheme = sessionStorage.getItem('expectedTheme');
    const actualTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    
    console.log('Expected theme after reload:', expectedTheme);
    console.log('Actual theme after reload:', actualTheme);
    
    if (expectedTheme === actualTheme) {
      console.log('✅ PASS: Theme persisted correctly after reload!');
    } else {
      console.log('❌ FAIL: Theme did not persist correctly after reload.');
    }
    
    // Clean up
    sessionStorage.removeItem('checkThemeAfterReload');
    sessionStorage.removeItem('expectedTheme');
  }
}

// Check if we need to verify theme after reload
if (sessionStorage.getItem('checkThemeAfterReload') === 'true') {
  checkAfterReload();
} else {
  console.log('Run testThemePersistence() to test theme switching and persistence');
}

// Export the test function
if (typeof window !== 'undefined') {
  window.testThemePersistence = testThemePersistence;
}
