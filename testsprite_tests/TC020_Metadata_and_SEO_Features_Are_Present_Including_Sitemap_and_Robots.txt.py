import asyncio
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None
    
    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()
        
        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )
        
        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)
        
        # Open a new page in the browser context
        page = await context.new_page()
        
        # Navigate to your target URL and wait until the network request is committed
        await page.goto("http://localhost:3000", wait_until="commit", timeout=10000)
        
        # Wait for the main page to reach DOMContentLoaded state (optional for stability)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=3000)
        except async_api.Error:
            pass
        
        # Iterate through all iframes and wait for them to load as well
        for frame in page.frames:
            try:
                await frame.wait_for_load_state("domcontentloaded", timeout=3000)
            except async_api.Error:
                pass
        
        # Interact with the page elements to simulate user flow
        # -> Request /sitemap.xml and verify file exists and contains valid entries.
        await page.goto('http://localhost:3000/sitemap.xml', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Navigate explicitly to base URL http://localhost:3000/ to regain valid page context for metadata inspection.
        await page.goto('http://localhost:3000/', timeout=10000)
        await asyncio.sleep(3)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=ZOKU').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=HOME').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=ABOUT').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=CLASSES').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=MEMBERSHIP').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=CONTACT').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=JOIN NOW').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=ZOKU FITNESS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Where vision meets reality,').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=we shape the future of tomorrow').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=COSMOS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Beyond the boundaries of imagination,').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=lies the universe of possibilities').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=INFINITY').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=In the space between thought and creation,').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=we find the essence of true innovation').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=REDEFINING FITNESS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=At Zoku, we believe fitness is more than just a workout—it's a lifestyle. Our state-of-the-art facility combines cutting-edge technology with expert coaching to help you unlock your full potential.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=OUR CLASSES').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=HIIT BURN').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=High intensity interval training to torch calories.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=POWER YOGA').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Strength and flexibility combined in a flow.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=SPIN CYCLE').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Endurance cycling with high-energy beats.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=JOIN THE MOVEMENT').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Unlock exclusive access to our premium facilities, expert trainers, and a community that supports your journey.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Unlimited Class Access').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=State-of-the-art Equipment').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Free Personal Training Session').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Sauna & Recovery Zone').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=READY TO START?').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Visit us today or get in touch to schedule your tour. Your transformation begins here.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Contact Us').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=+1 (555) 123-4567').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=ZOKU').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Redefining fitness through community, technology, and premium experiences.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=EXPLORE').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=About Us').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Classes').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Membership').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Contact').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=SUPPORT').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=FAQ').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Contact').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Privacy Policy').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Terms of Service').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=CONNECT').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Subscribe to our newsletter for updates.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=© 2025 Zoku Fitness. All rights reserved.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Designed for Excellence.').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    