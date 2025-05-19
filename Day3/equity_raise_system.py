#!/usr/bin/env python3
"""
Privaat Capital LLC - Aura Aero Equity Raise System
--------------------------------------------------
Master deployment script that integrates all components of the
Aura Aero equity raise system into a cohesive production-ready solution.

This script provides a simple command-line interface to run the complete
system or individual components as needed.
"""

import os
import sys
import argparse
import logging
import subprocess
import time
from datetime import datetime

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('/home/ubuntu/output/privaat_capital_aura_aero.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# Configuration
OUTPUT_DIR = '/home/ubuntu/output'
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Company information
COMPANY_NAME = "Privaat Capital LLC"
COMPANY_ADDRESS = "Suite 702, Emaar Square Building 6, Dubai Downtown, UAE"
CONTACT_NAME = "Alexis SG Delprat"
CONTACT_EMAIL = "adp@privaatcapital.com"
COMPANY_LOGO = f"{OUTPUT_DIR}/privaat_capital_official_logo.png"

# Component scripts
LINKEDIN_SCRAPER = "/home/ubuntu/linkedin_investor_scraper.py"
EMAIL_AUTOMATION = "/home/ubuntu/email_automation.py"
GOOGLE_CALENDAR = "/home/ubuntu/google_calendar_integration.py"
INVESTOR_TRACKING = "/home/ubuntu/investor_tracking_spreadsheet.py"
HUBSPOT_INTEGRATION = "/home/ubuntu/hubspot_integration.py"

def print_header():
    """Print the program header"""
    print("\n" + "=" * 80)
    print(f"{COMPANY_NAME} - AURA AERO EQUITY RAISE SYSTEM")
    print("=" * 80)
    print(f"Contact: {CONTACT_NAME} <{CONTACT_EMAIL}>")
    print(f"Address: {COMPANY_ADDRESS}")
    print("-" * 80)

def check_dependencies():
    """
    Check if all required dependencies are installed
    
    Returns:
        bool: True if all dependencies are installed, False otherwise
    """
    logger.info("Checking dependencies")
    
    dependencies = [
        "pandas",
        "numpy",
        "openpyxl",
        "requests",
        "keyring",
        "google-api-python-client",
        "google-auth-httplib2",
        "google-auth-oauthlib"
    ]
    
    missing = []
    
    for dep in dependencies:
        try:
            __import__(dep)
        except ImportError:
            missing.append(dep)
    
    if missing:
        logger.warning(f"Missing dependencies: {', '.join(missing)}")
        
        # Install missing dependencies
        print(f"\nInstalling missing dependencies: {', '.join(missing)}")
        
        try:
            subprocess.run([sys.executable, "-m", "pip", "install"] + missing, check=True)
            logger.info("Successfully installed missing dependencies")
            return True
        except subprocess.CalledProcessError as e:
            logger.error(f"Failed to install dependencies: {e}")
            return False
    
    logger.info("All dependencies are installed")
    return True

def run_linkedin_scraper(args):
    """Run the LinkedIn investor scraper"""
    logger.info("Running LinkedIn investor scraper")
    
    print("\nRunning LinkedIn Investor Scraper...")
    print("This will identify suitable investors based on your LinkedIn feed.")
    
    try:
        cmd = [sys.executable, LINKEDIN_SCRAPER]
        
        if args.keywords:
            cmd.extend(["--keywords", args.keywords])
        
        if args.count:
            cmd.extend(["--count", str(args.count)])
        
        if args.test:
            cmd.append("--test")
        
        subprocess.run(cmd, check=True)
        logger.info("LinkedIn investor scraper completed successfully")
        return True
    except subprocess.CalledProcessError as e:
        logger.error(f"LinkedIn investor scraper failed: {e}")
        return False

def run_email_automation(args):
    """Run the email automation script"""
    logger.info("Running email automation")
    
    print("\nRunning Email Automation...")
    print("This will send investment teasers to identified investors.")
    
    try:
        cmd = [sys.executable, EMAIL_AUTOMATION]
        
        if args.test:
            cmd.append("--test")
        
        subprocess.run(cmd, check=True)
        logger.info("Email automation completed successfully")
        return True
    except subprocess.CalledProcessError as e:
        logger.error(f"Email automation failed: {e}")
        return False

def run_google_calendar_integration(args):
    """Run the Google Calendar integration"""
    logger.info("Running Google Calendar integration")
    
    print("\nRunning Google Calendar Integration...")
    print("This will schedule meetings with interested investors.")
    
    try:
        cmd = [sys.executable, GOOGLE_CALENDAR]
        
        if args.test:
            cmd.append("--test")
        
        subprocess.run(cmd, check=True)
        logger.info("Google Calendar integration completed successfully")
        return True
    except subprocess.CalledProcessError as e:
        logger.error(f"Google Calendar integration failed: {e}")
        return False

def run_investor_tracking(args):
    """Run the investor tracking spreadsheet generator"""
    logger.info("Running investor tracking spreadsheet generator")
    
    print("\nRunning Investor Tracking Spreadsheet Generator...")
    print("This will generate a comprehensive tracking spreadsheet for all investors.")
    
    try:
        cmd = [sys.executable, INVESTOR_TRACKING]
        
        if args.test:
            cmd.append("--test")
        
        subprocess.run(cmd, check=True)
        logger.info("Investor tracking spreadsheet generator completed successfully")
        return True
    except subprocess.CalledProcessError as e:
        logger.error(f"Investor tracking spreadsheet generator failed: {e}")
        return False

def run_hubspot_integration(args):
    """Run the Hubspot CRM integration"""
    logger.info("Running Hubspot CRM integration")
    
    print("\nRunning Hubspot CRM Integration...")
    print("This will sync all investor data with your Hubspot CRM account.")
    
    try:
        cmd = [sys.executable, HUBSPOT_INTEGRATION]
        
        if args.test:
            cmd.append("--test")
        
        subprocess.run(cmd, check=True)
        logger.info("Hubspot CRM integration completed successfully")
        return True
    except subprocess.CalledProcessError as e:
        logger.error(f"Hubspot CRM integration failed: {e}")
        return False

def run_full_system(args):
    """Run the complete system end-to-end"""
    logger.info("Running complete Aura Aero equity raise system")
    
    print("\nRunning Complete Aura Aero Equity Raise System...")
    print("This will execute all components in sequence:")
    print("1. LinkedIn Investor Scraper")
    print("2. Email Automation")
    print("3. Google Calendar Integration")
    print("4. Investor Tracking Spreadsheet")
    print("5. Hubspot CRM Integration")
    
    # Step 1: LinkedIn Scraper
    print("\n" + "-" * 50)
    print("STEP 1: LINKEDIN INVESTOR SCRAPER")
    print("-" * 50)
    if not run_linkedin_scraper(args):
        logger.error("Full system execution failed at LinkedIn scraper step")
        return False
    
    # Step 2: Email Automation
    print("\n" + "-" * 50)
    print("STEP 2: EMAIL AUTOMATION")
    print("-" * 50)
    if not run_email_automation(args):
        logger.error("Full system execution failed at email automation step")
        return False
    
    # Step 3: Google Calendar Integration
    print("\n" + "-" * 50)
    print("STEP 3: GOOGLE CALENDAR INTEGRATION")
    print("-" * 50)
    if not run_google_calendar_integration(args):
        logger.error("Full system execution failed at Google Calendar integration step")
        return False
    
    # Step 4: Investor Tracking
    print("\n" + "-" * 50)
    print("STEP 4: INVESTOR TRACKING SPREADSHEET")
    print("-" * 50)
    if not run_investor_tracking(args):
        logger.error("Full system execution failed at investor tracking step")
        return False
    
    # Step 5: Hubspot Integration
    print("\n" + "-" * 50)
    print("STEP 5: HUBSPOT CRM INTEGRATION")
    print("-" * 50)
    if not run_hubspot_integration(args):
        logger.error("Full system execution failed at Hubspot integration step")
        return False
    
    logger.info("Complete Aura Aero equity raise system executed successfully")
    
    print("\n" + "=" * 50)
    print("SYSTEM EXECUTION COMPLETED SUCCESSFULLY")
    print("=" * 50)
    print(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"Output Directory: {OUTPUT_DIR}")
    print("=" * 50)
    
    return True

def main():
    """Main function to run the Privaat Capital Aura Aero equity raise system"""
    parser = argparse.ArgumentParser(
        description=f"{COMPANY_NAME} - Aura Aero Equity Raise System",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python3 privaat_capital_aura_aero.py                # Run the complete system
  python3 privaat_capital_aura_aero.py --linkedin     # Run only the LinkedIn scraper
  python3 privaat_capital_aura_aero.py --email        # Run only the email automation
  python3 privaat_capital_aura_aero.py --test         # Run in test mode with sample data
  python3 privaat_capital_aura_aero.py --keywords "venture capital clean energy" --count 50  # Custom search
        """
    )
    
    parser.add_argument("--linkedin", action="store_true", help="Run only the LinkedIn investor scraper")
    parser.add_argument("--email", action="store_true", help="Run only the email automation")
    parser.add_argument("--calendar", action="store_true", help="Run only the Google Calendar integration")
    parser.add_argument("--tracking", action="store_true", help="Run only the investor tracking spreadsheet generator")
    parser.add_argument("--hubspot", action="store_true", help="Run only the Hubspot CRM integration")
    parser.add_argument("--test", action="store_true", help="Run in test mode with sample data")
    parser.add_argument("--keywords", type=str, help="Keywords for LinkedIn investor search")
    parser.add_argument("--count", type=int, help="Number of investors to find")
    
    args = parser.parse_args()
    
    # Print header
    print_header()
    
    # Check dependencies
    if not check_dependencies():
        print("\nError: Failed to install required dependencies. Please install them manually.")
        return 1
    
    # Run selected components or full system
    try:
        if args.linkedin:
            run_linkedin_scraper(args)
        elif args.email:
            run_email_automation(args)
        elif args.calendar:
            run_google_calendar_integration(args)
        elif args.tracking:
            run_investor_tracking(args)
        elif args.hubspot:
            run_hubspot_integration(args)
        else:
            # Run the complete system
            run_full_system(args)
        
        return 0
    except Exception as e:
        logger.error(f"Error running system: {e}")
        print(f"\nError: {e}")
        return 1

if __name__ == "__main__":
    sys.exit(main())



# https://chatgpt.com/c/682abfd5-4674-8000-9c89-3d81eba8bfce - ChatGPT