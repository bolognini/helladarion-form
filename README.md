# Helladarion Form 🐉

<p align="center"><img src="public/logo.png" alt="T20 Bestiary Logo" width="60"></p>
<p align="center">&laquo;<b>A simplified monster builder for Tormenta20 RPG system</b>&raquo;</p>
<p align="center">Helladarion Form sends all the enemy data you type and send to a database through an API. This data will be accessible on <a href='https://github.com/bolognini/helladarion-codex'>Helladarion Codex</a>, the virtual sheet, with the right enemy id</p>
<br />
<br />

## Description

Helladarion Form was created as an auxiliary tool for the Tormenta20 campaign I was playing with my friends. I used it to help me as a Dungeon Master and it works only with [Tormenta20 RPG System](https://tormentarpg.com.br/), a pretty cool Brazilian RPG System.
### What's that about?

As a Dungeon Master, you have to prepare a lot of enemies for your campaign. This project helps you by organizing the important data where you create and digitally update the enemy stats, removing the need to jumping from page to page on Tormenta20 book to check the enemy specifications.

Do You want to create a new enemy? Just type all its data and it'll render the way you want. You use enemies already created on the book but you constantly customize them on a .txt file? The [virtual sheet](https://github.com/bolognini/helladarion-codex) can update every data by editing the initial stats.

### Hella-what?

[Helladarion](https://tormenta.fandom.com/pt/wiki/Helladarion) is an artifact created by Tanna-Toh, god of knowledge from Tormenta20 RPG System. This artifact holds all the knowledge of Arton, the fantasy world of this system. The joke here is like you're some priest feeding the artifact knowledge by reporting the stats of new creatures.

## Layout

The initial layout that was made is [this design](https://www.figma.com/file/B2gEwGhJfC7xmEJqnZVsIG/Helladarion-Form) I created on Figma. As development was happening, some things were added, others changed and you can check out the final version on [helladarion-form.netlify.app](https://helladarion-form.netlify.app/).

## Project

This project is a Typescript study. It collects data from the user through input elements and sends them to [Helladarion API](https://github.com/bolognini/helladarion), which will store the data on a Firebase database. After that, the data is accessed on [Helladarion Codex](https://github.com/bolognini/helladarion-codex), the Tormenta20 RPG System sheet with editable fields that persists information to build monsters for your RPG campaign.

### Installing

To run the project on development mode, you just need an LTS Node version installed (v14 or higher recommended), and Yarn for managing the packages. If you haven't it yet, you can follow the [Yarn installation guide](https://classic.yarnpkg.com/pt-BR/docs/install/), on their official page.

With Node and Yarn installed, run the commands below. They will clone the project on the current folder, download all the project dependencies and, in a few minutes, the project will open on your default browser, on the port `:3000`.

```shell
git clone https://github.com/bolognini/helladarion-form.git
cd helladarion-form
yarn && yarn dev
```

### Built With

* [Next.js](https://nextjs.org/) - A popular React Framework
* [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript
* [Styled Components](https://styled-components.com/) - CSS in JS library
* [Redux](https://redux.js.org/) - State Container
* [Axios](https://github.com/axios/axios) - For HTTP requests
* [Husky](https://github.com/typicode/husky) - Git Hooks lib
* [ESLint](https://eslint.org/) - JavaScript Linter
* [Netlify](https://www.netlify.com/) - For CI/CD and deployment
* [Flaticon](https://www.flaticon.com/) - For theme icons

<hr />

Helladarion Form is in its very first release version, which means it has a lot to improve. Since this is something really small and it's used as an auxiliary personal tool I decided to take it easy. That's why I didn't develop a responsive layout, for example.

If you use it and found some bug, have some suggestions to improve it, please feel free to open an issue or send a Pull Request. This is an open-source project! ✌️

I do not own the rights of anything related to the Tormenta20 RPG System. All the rights are reserved and owned by [Jambô Editora](https://jamboeditora.com.br/).
