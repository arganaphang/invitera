<a href="https://invitera.art">
  <img alt="invitera - Invitation website with some extra DX" src="">
  <h1 align="center">invitera</h1>
</a>

<p align="center">
  An open-source link management tool for modern marketing teams to create, share, and track short links.
</p>

<p align="center">
  <a href="https://twitter.com/arga_xy">
    <img src="https://img.shields.io/twitter/follow/arga_xy?style=flat&label=%40arga_xy&logo=twitter&color=0bf&logoColor=fff" alt="Twitter" />
  </a>
  <a href="https://github.com/arganaphang/invitera/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/arganaphang/invitera?label=license&logo=github&color=f80&logoColor=fff" alt="License" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#implementation"><strong>Implementation</strong></a> ·
  <a href="#contributing"><strong>Contributing</strong></a>
</p>
<br/>

## Introduction

## Tech Stack

- [Next.js](https://nextjs.org/) – framework
- [Typescript](https://www.typescriptlang.org/) – language
- [Tailwind](https://tailwindcss.com/) – CSS
- [PlanetScale](https://planetscale.com/) – database
- [NextAuth.js](https://next-auth.js.org/) – auth
- [Vercel](https://vercel.com/) – hosting

## Implementation

invitera is built as a standard Next.js application with [Middleware](https://nextjs.org/docs/advanced-features/middleware) to handle multi-tenancy, inspired by [the Vercel Platforms Starter Kit](https://github.com/vercel/platforms).

[MySQL](https://www.mysql.com/) is used as the database for storing user data, project data, and link metadata. You can refer to the Prisma schema [here](/prisma/schema.prisma).

## Contributing

We love our contributors! Here's how you can contribute:

- [Open an issue](https://github.com/arganaphang/invitera/issues) if you believe you've encountered a bug.
- Make a [pull request](https://github.com/arganaphang/invitera/pull) to add new features/make quality-of-life improvements/fix bugs.

<a href="https://github.com/arganaphang/invitera/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=arganaphang/invitera" />
</a>

## Author

- Argana Phangquestian ([@arga_xy](https://twitter.com/arga_xy))

## License

MIT

