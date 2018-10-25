# CVPZ [![Build status](https://ci.appveyor.com/api/projects/status/rwvr7jl20nw00eiu/branch/master?svg=true)](https://ci.appveyor.com/project/ssdugadmin21923/cvpz/branch/master) [![Build Status](https://travis-ci.org/ssdug/CVPZ.svg?branch=master)](https://travis-ci.org/ssdug/CVPZ) [![Join us](https://webtasks.iamnotmyself.com/notmyself/ssdug-slackin/badge.svg)](https://webtasks.iamnotmyself.com/notmyself/ssdug-slackin/)

![CVPZ](docs/images/buisness_cat.jpg?raw=true "CVPZ")

**CV** for [Curriculum Vitae](https://en.wikipedia.org/wiki/Curriculum_vitae) is a written overview of a person's experience and other qualifications. **PZ** 'cause it sounds easy.

## TOC

- [Who](#who), [What](#what), [Why](#why), [How](#how)
- [Getting Started](#getting-started)

  - [Running Locally from PowerShell](#running-locally-from-powershell)

- [Sponsors](#sponsors)

  - [Become a Sponsor](#become-a-sponsor)

## Who

CVPZ is a community project created by the South Sound Developers User Group ([SSDUG](http://ssdug.org)) in lovely [Olympia, WA](http://olympiawa.gov/). The group is led by [Eve Ragins](https://github.com/emragins) and this project was started and led by [Carter Barnes](https://github.com/CarBar).

## What

Developers continuously need to keep their resumes current, documenting every project, engagement, and various details of accomplishments.  Many have created git repositories that can store versions of these resumes well. However, as the breadth of experience expands it becomes hard to manage the growing amount of data in a single document. There are places to manage resume information, but these tools do not allow management of versions of the individual projects or the ability to query history to aid in highlighting specific experience.

## Why

We are hoping to inspire community involvement by building a simple and useful tool and to create an open space for anyone who wants to be involved to come and play. As a community we can expose each other to our favorite technologies and libraries, build relationships and refine our soft skills. Ultimately this should affect our local development community in many positive ways.

## How

By having one common goal to work toward, we will share ideas and continually move the project forward.  We will start with the setup of some infrastructure and then work on basic requirements.  The possibilities are endless with collaborative effort!

## Getting Started

1. Install [.NET Core SDK 2.0](https://www.microsoft.com/net/download/core).
1. Install [Visual Studio Code](https://code.visualstudio.com/), the [Insiders Edition](https://code.visualstudio.com/insiders) is highly recommended.
1. Clone the repository: `git clone https://github.com/ssdug/CVPZ.git`.
1. Change directory into the cloned repository `cd CVPZ`.
1. Restore packages: `dotnet restore .\CVPZ.sln`.
1. Open the project in VSCode `code-insiders .` or `code .` depending on what version you chose to install.
    - Note: On Mac OS: after installing, open up VS Code, Press: Command + Shift + P and then type in and select `Shell Command : Install 'code' command in PATH`.  This will enable you to open VS Code from Terminal with the `code .` command.

### Running Locally from PowerShell

1. Open PowerShell.
1. Change directory into the cloned repository `cd CVPZ/src/cvpz.web`.
1. Execute the command `dotnet run`.
    - This will build the project and start all services running in the background.

## Sponsors

### [CodeSmart, Inc](http://codesmartinc.com/)

Thank you to CodeSmart for providing space, pizza and beer for our initial kick off meeting.

- [CVPZ Hack Night](https://www.meetup.com/ssdevelopers/events/238255202/) - March 16th, 2017

### [Kiehl Northwest](http://kiehlnorthwest.com/)

Thank you to Kiehl for booking space, obtaining banquit license and providing pizza and beer for our second hackathon.

- [CVPZ Hackathon II](https://www.meetup.com/ssdevelopers/events/239305202/) - May 4th, 2017

### Become a Sponsor

If you or your organization are interested in sponsoring a hackathon or a user group meeting, please contact us via [Meetup](https://www.meetup.com/ssdevelopers/). Just click the contact us button.
