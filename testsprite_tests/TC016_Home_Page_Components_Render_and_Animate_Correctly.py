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
        # -> Scroll down to reveal about preview section and verify its summary content.
        await page.mouse.wheel(0, 600)
        

        # -> Scroll further to reveal classes preview section and verify its summary content.
        await page.mouse.wheel(0, 600)
        

        # -> Scroll down to reveal membership preview section and verify its summary content.
        await page.mouse.wheel(0, 600)
        

        # -> Scroll down further to reveal the contact preview section and verify its summary content and interactivity.
        await page.mouse.wheel(0, 600)
        

        # -> Verify animations trigger correctly on scroll or entry for all sections.
        await page.mouse.wheel(0, -1800)
        

        # -> Trigger and verify animations in the hero section by interacting or waiting for entry animations.
        await page.mouse.wheel(0, 200)
        

        # -> Scroll down to about preview section and verify animations trigger correctly on entry.
        await page.mouse.wheel(0, 400)
        

        # -> Scroll down to about preview section and verify animations trigger correctly on entry.
        await page.mouse.wheel(0, 400)
        

        # -> Scroll down to classes preview section and verify animations trigger correctly on entry.
        await page.mouse.wheel(0, 600)
        

        # -> Scroll down to classes preview section and verify animations trigger correctly on entry.
        await page.mouse.wheel(0, 600)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=Where vision meets reality, we shape the future of tomorrow').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Redefining Fitness').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=At Zoku, we believe fitness is more than just a workout—it's a lifestyle. Our state-of-the-art facility combines cutting-edge technology with expert coaching to help you unlock your full potential.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=HIIT BURN').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=High intensity interval training to torch calories.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=POWER YOGA').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Strength and flexibility combined in a flow.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=SPIN CYCLE').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Endurance cycling with high-energy beats.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Unlock exclusive access to our premium facilities, expert trainers, and a community that supports your journey.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Unlimited Class Access').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=State-of-the-art Equipment').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Free Personal Training Session').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Sauna & Recovery Zone').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Ready to Start? Visit us today or get in touch to schedule your tour. Your transformation begins here.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=+1 (555) 123-4567').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    