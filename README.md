# Fergus's Automation Take Home Project

This project has been created to meet the criteria laid out in the Focus Area 1 - Automation Fundamentals assessment. To do this, it was created from the example project provided in the Playwright automation documentation (https://playwright.dev/docs/intro), and was then updated. It now contains this README, which has been incrementally updated as per the requirements and is aiming to follow best practice for structure and content, as well as a single test file that performs a series of simple tests on the www.tombola.co.uk landing page.

Tests have been written for this website in particular because on the Tombola project, there is some possibility for further Playwright tests, especially around work that has been done within my team.

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
- [Credits](#credits)
- [Future Improvements](#future_improvements)

## Installation

This repo is known to work with the following minimum requirements:

- Node v18.18.2
- Npm 9.8.1

Using the command line interpreter 'Bash' you can check the versions of each as follows:

Node: node -v
Npm: npm -v

If you do not have these installed, the recommended approach to installing them is to visit the official Node.js website and follow the most appropraite path from there.
Note: Npm comes with the installation of Node.js.

## Setup

Once npm & node are installed, we can focus on setting up our project.

1. Navigate to the folder you wish to store the repository in cd
2. Clone the repository: git clone https://github.com/xdesign-fergusmcateer/Fmcateer-cf-cross-skilling.git
3. Install all project dependencies with the following command: npm install
4. Install Playwright browsers with the following command: npx playwright install

Once complete, you should now be able to run the Playwright scripts as per the below commands listed under running tests.

## Usage

To run the test file locally, use the following command:

- npx playwright test

To open the report of the latest test run:

- npx playwright show-report

## Credits

Thanks to Mark Ellis and Liam Brotchie in particular for their time dedicated to helping me to begin to understand Playwright, Javascript and Github repo expectations.

## Future Improvements

I hope to expand this repository and the test cases within to cover much more of Tombola's functionality, with the goal of convincing Tombola to allow more people write access to their automated tests. There is a large amount of work from my team on this project that current requires extensive manual regression, but Tombola's QA team are not eager to open up the automation repository to anyone apart from Tombola-hired automation engineers. The interim solution is to automate tests locally to make life much easier.
