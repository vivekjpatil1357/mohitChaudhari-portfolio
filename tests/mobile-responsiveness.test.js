// Simple visual test to check mobile responsiveness
// Run this in your browser console to test how the theme switcher looks on mobile

function testMobileResponsiveness() {
  console.log('Starting mobile responsiveness test...');
  
  // Save current viewport size
  const originalWidth = window.innerWidth;
  const originalHeight = window.innerHeight;
  
  // Create a visual marker function
  function createMarker(elementId, message) {
    const marker = document.createElement('div');
    marker.style.position = 'fixed';
    marker.style.top = '0';
    marker.style.left = '0';
    marker.style.width = '100%';
    marker.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
    marker.style.color = 'red';
    marker.style.padding = '10px';
    marker.style.zIndex = '10000';
    marker.style.textAlign = 'center';
    marker.style.fontSize = '16px';
    marker.style.fontWeight = 'bold';
    marker.innerText = message;
    marker.id = elementId;
    document.body.appendChild(marker);
  }
  
  // Mobile device sizes to test
  const devices = [
    { name: 'iPhone SE', width: 375, height: 667 },
    { name: 'iPhone X/11/12/13', width: 390, height: 844 },
    { name: 'iPhone 12/13 Pro Max', width: 428, height: 926 },
    { name: 'Pixel 5', width: 393, height: 851 },
    { name: 'Samsung Galaxy S20', width: 360, height: 800 },
    { name: 'iPad Mini', width: 768, height: 1024 },
    { name: 'iPad Pro', width: 1024, height: 1366 }
  ];
  
  let deviceIndex = 0;
  
  function simulateNextDevice() {
    // Remove existing marker if any
    const existingMarker = document.getElementById('responsiveness-test-marker');
    if (existingMarker) {
      existingMarker.remove();
    }
    
    if (deviceIndex >= devices.length) {
      // Reset to original size and end test
      window.innerWidth = originalWidth;
      window.innerHeight = originalHeight;
      window.dispatchEvent(new Event('resize'));
      console.log('Mobile responsiveness test completed!');
      return;
    }
    
    const device = devices[deviceIndex];
    console.log(`Testing on ${device.name} (${device.width}x${device.height})`);
    
    // Simulate resize
    window.innerWidth = device.width;
    window.innerHeight = device.height;
    window.dispatchEvent(new Event('resize'));
    
    // Create visual marker
    createMarker('responsiveness-test-marker', 
      `Testing on ${device.name} (${device.width}x${device.height}) - Check ThemeSwitcher visibility & tooltip positioning`
    );
    
    // Instructions
    console.log('Please check:');
    console.log('1. Is the theme switcher clearly visible in the navbar?');
    console.log('2. Does the floating theme button appear when scrolling down?');
    console.log('3. Do tooltips display correctly without being cut off?');
    console.log('4. Is the mobile menu working with the theme switcher visible?');
    
    deviceIndex++;
    
    // Allow time to check before moving to next device
    console.log('Moving to next device in 5 seconds...');
    setTimeout(simulateNextDevice, 5000);
  }
  
  // Start the test
  simulateNextDevice();
}

// Export the test function
if (typeof window !== 'undefined') {
  window.testMobileResponsiveness = testMobileResponsiveness;
  console.log('Run testMobileResponsiveness() to test how the theme switcher looks on different mobile devices');
}
