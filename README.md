# Helladarion Form 🐉

<p align="center"><img src="public/logo.png" alt="T20 Bestiary Logo" width="60"></p>
<p align="center">&laquo;<b>A simplified monster builder for Tormenta20 RPG system</b>&raquo;</p>
<p align="center">Helladarion Form send all the enemy data you type and send to a database trough an API. This data will be acessible on <a href='https://github.com/bolognini/helladarion-codex'>Helladarion Codex</a>, the virtual sheet, with the right enemy id</p>
<br />
<hr />
<br />

## Description

Helladarion Form was created as an auxliary tool for the Tormenta20 campaign I was playing with my friends. I used it to help me as a Dungeon Master and it works only with [Tormenta20 RPG System](https://tormentarpg.com.br/), a pretty cool Brazilian RPG System.
### What's that about?

As a Dungeon Master, you have to prepare a lot of enemies for your campaign. This project helps you by organizing the important data where you create and update the enemy stats in a digital way, removing the need to jumping from page to page on Tormenta20 book to check the enemy specifications.

You want to create a new enemy? Just type all its data and it'll render the way you want. You use enemies already created on the book but you constantly customize them on a .txt file? The [virtual sheet](https://github.com/bolognini/helladarion-codex) can update every data by editting the initial stats.

### Hella-what?

[Helladarion](https://tormenta.fandom.com/pt/wiki/Helladarion) is an artifact created by Tanna-Toh, god of knowledgment from Tormenta20 RPG System. This artifact holds all the knowledge of Arton, the fantasy world of this system. The joke here is like you're some priest feeding the artifact knowledge by reporting the stats of new creatures.

## Layout

The initial layout that was made is [this design](https://www.figma.com/file/B2gEwGhJfC7xmEJqnZVsIG/Helladarion-Form) I created on Figma. As development was happening, some things were added, others changed and you can check out the finale version on [helladarion-form.netlify.app](https://helladarion-form.netlify.app/).

## Project

This project is a Typescript study. It collects data from the user trough input elements and send them to [Helladarion API](https://github.com/bolognini/helladarion), which will store the data on a Firebase database. After that the data is accessed on [Helladarion Codex](https://github.com/bolognini/helladarion-codex), the Tormenta20 RPG System sheet with editable fields that persists information to build monsters for your RPG campaign.
