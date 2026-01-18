import { Lucide } from "@react-native-vector-icons/lucide";
import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";
import GlassTabBar from "../components/GlassTabBar";

export default function Layout() {
    const scheme = useColorScheme();
    const isDark = scheme === "dark";

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
            tabBar={(props) => <GlassTabBar {...props} />}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Lucide
                                name="house"
                                size={20}
                                color={
                                    isDark
                                        ? "hsl(0, 0%, 95%)"
                                        : "hsl(0, 0%, 0%)"
                                }
                            />
                        ) : (
                            <Lucide
                                name="house"
                                size={20}
                                color={
                                    isDark
                                        ? "hsl(0, 0%, 70%)"
                                        : "hsl(0, 0%, 20%)"
                                }
                            />
                        ),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "settings",
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Lucide
                                name="settings"
                                size={20}
                                color={
                                    isDark
                                        ? "hsl(0, 0%, 95%)"
                                        : "hsl(0, 0%, 0%)"
                                }
                            />
                        ) : (
                            <Lucide
                                name="settings"
                                size={20}
                                color={
                                    isDark
                                        ? "hsl(0, 0%, 70%)"
                                        : "hsl(0, 0%, 20%)"
                                }
                            />
                        ),
                }}
            />
        </Tabs>
    );
}
