---
title: There's more than one way to skin a cat - My Stack
publish_date: 2022-11-19
---

## There's more than one way to skin a cat.

When building an internet application, there is a million ways to do it. The core conponets of a stack boil down to three main parts. A display layer, logic layer, and data store layer.

![three components of a stack](../photos/stack.png)

Most of the worlds code is written for the internet. There's game dev, embedded systems, data science and others but the majority of code primarly revolves around web, mobile, and backend development.

I like to group the worlds most popular languages into four buckets for backend development.

![four language groups](../photos/language_groups.png)

> C and C++ - They are the OGs, powerful, old, lots of footguns

> C# and Java - Enterprise heavyweights, powerful, verbose, legacy

> JavaScript, Ruby, Python, PHP - Easy to learn, interpreted, dynamically typed, slow, lots of logic errors

> Rust and Go - Compiled, strongly typed, extremely fast, modern

You may have noticed that TypeScript isn't in a group. TypeScript is in a very interesting place in the current landscape. It's more production ready than its other interpreted counterparts but it still suffers from being quite slow in performance and it's type system isn't good as it should be to be considered amongst the other more production ready langugages.

These groups are sorted on two axes. Modernness and Production Readiness.

## Production Readiness

This one is pretty straight forward. This looks at things like developer productivity in a team environment, error probablility, scalability, performance, minimizing technical debt, etc.

## Modernness

This one may not seem as important or straight forward but it is critical to developer productivity. One example is the package management experience. Compare the C++ package management experience vs Rust's package management experience. It's a night and day difference. There's also a lot of language specific differences that make some langauages much easier to code with than others.

## Choosing The Stack

With that ground level laid, let's dive into the actual stack. This stack is chosen with these two philosophies in mind.

> Maximize developer productivity

> Minimize technical debt

Maximizing developer productivity means building only what is unique about what you are building. If you need auth, a web framework, a backend framework, etc, then just pull in something that's already been built before. There's no need to build that again when the solutions out there are really good and they are open source.

Minimizing technical debt means never building something that engineers are going to have to rewrite sometime down the road. It takes 5x longer to fix technical debt than it is to just do it right in the first place. This includes picking a stack that scales. I've seen so many companies pick a stack "in the name of speed" only to be hammered when they have to rebuild it differently down the road.

Some examples include companies that start with Firebase. Firebase is cute when you are starting because it takes care of a lot of heavy lifting. It becomes a nightmare though when you need switch off of it. Another example is companies that picked Ruby on Rails. It looks good in the beginning with all of the batteries included. It becomes a nightmare at scale when you have more than 5 engineers working on it.

## The Stack

The stack consists of using Next.js with TypeScript on Vercel for the frontend. Axum with rust on Railway for the backend. Postgres on Supbase for the database. The deployment methods are listed but can easily be swapped out due to one of the core tenants of the stack being portability (no vendor lock-in is key to minimizing technical debt).

These three technologies can be used to scale to millions of users (granted the deployment methods will need to be adapted but Next, Rust, and Postgres are well equiped to do that). 