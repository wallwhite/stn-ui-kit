# STN UI

This is the Snt UI library project, which includes common UI components, hooks, and utils for building great applications. The project is built using React and TypeScript, and the components are documented in Storybook.


### Tooling

- [Node.js](https://nodejs.org/)
- [PNPM](https://pnpm.io/) to manage packages and dependencies
- [Vite](https://vitejs.dev/) to bundle packages
- [Storybook](https://storybook.js.org/) for rapid UI component development and
  testing
- [Changeset](https://github.com/atlassian/changesets) for changes
  documentation, changelog generation, and release management.


### Structure

The project is divided into several packages, each with the `@stn-ui/**` namespace:

## Usage

The STN UI library is a comprehensive set of components and utilities designed to help you build efficient and consistent user interfaces. Below is a guide on how to import and use each package:

### Installation
To install a package, use the following command:

```
npm install @stn-ui/[package-name]
# or
yarn add @stn-ui/[package-name]
```

Replace `[package-name]`` with the name of the desired package.

### Available Packages
```
# All components together
npm install @stn-ui/react

# Theme
npm install @stn-ui/theme

# Components
npm install @stn-ui/avatar
npm install @stn-ui/button
npm install @stn-ui/chat-row
npm install @stn-ui/chats-navigation
npm install @stn-ui/color-avatar
npm install @stn-ui/form
npm install @stn-ui/forms
npm install @stn-ui/heading
npm install @stn-ui/icons
npm install @stn-ui/inputs
npm install @stn-ui/layout
npm install @stn-ui/link
npm install @stn-ui/loadable
npm install @stn-ui/loader
npm install @stn-ui/logo
npm install @stn-ui/messages
npm install @stn-ui/modal
npm install @stn-ui/navigation
npm install @stn-ui/pagination
npm install @stn-ui/provider
npm install @stn-ui/sidebar
npm install @stn-ui/switcher
npm install @stn-ui/table
npm install @stn-ui/text
npm install @stn-ui/toasts

# Utilities
npm install @stn-ui/common-utils
npm install @stn-ui/react-utils
npm install @stn-ui/use-toggle-boolean
```

### Development Setup

After cloning the repository, execute the following commands in the root folder:


1. Install dependencies

```bash
pnpm i

#or

pnpm install
```

We use [Turbo Repo](https://turborepo.org/) for the project management.

2. If you will be working on the components source code, you can use the following command to start the dev server:

```bash
pnpm dev ## this will start the storybook server for a faster development and testing.
```

### Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the avatar component`


If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).
