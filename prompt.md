I'm currently building a mobile app in react native and using nativewind (tailwindcss for styling). I want to build a recipe planning app. I want to build it screen by screen implementing the core functionalities first. I already setup a fresh expo app using react native and nativewind and implemented a bottom bar (GlassTabBar.tsx) and some placeholders for my 4 screens:

app/(tabs)/index.tsx (homepage with weekly recipe overview)
app/(tabs)/recipes.tsx (view and create recipes, super simple)
app/(tabs)/planner.tsx (interactive planner, using tinderlike swiping for recipe selection / planning)
app/(tabs)list.tsx (automatically derived ingredients list from the weekly plan)

I want to start with the planner.tsx as a proof of concept. Please implement the screens and components to fullill the following requirements.

When getting to the Screen there should be a nice text saying something like "Start planning your meals" and a call to action button below that when clicked start the process. When clicked it should direct to the next screen. This screen lets you select a starting date and end date and three toogles (default true) to select breakfast, lunch, dinner. If checked it will add meals x days to the total needed portions. Below that is an indicator that shows the currently selected potions and updates depending on the date span and what types of meals are included. Below that is a button to select and jump to the next screen. This screen has a stack of cards that the user can swipe left and right like with tinder to select a certain recipe. Above the cards will be a small indicator showing how many recipes still need to be selected. to populate the cards, for now a json dummy object should be used that can later be replaced by a database connection. 

Please create the requested screens and components. Use only tailwind and native wind for styling. here is the simple predefined scheme from the tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#1f1e17",
                secondary: "#151312",
                light: {
                    bg: "hsl(0, 0%, 90%)",
                    muted: "hsl(0, 0%, 95%)",
                    highlight: "hsl(0, 0%, 100%)",
                    text: "hsl(0, 0%, 5%)",
                    "text-muted": "hsl(0, 0%, 30%)",
                    border: "hsl(0, 0%, 75%)",
                },
                dark: {
                    bg: "hsl(0, 0%, 0%)",
                    muted: "hsl(0, 0%, 6%)",
                    highlight: "hsl(0, 0%, 15%)",
                    text: "hsl(0, 0%, 95%)",
                    "text-muted": "hsl(0, 0%, 70%)",
                    border: "hsl(0, 0%, 15%)",
                },
            },
        },
    },
    plugins: [],
};

Now lets beginn!
