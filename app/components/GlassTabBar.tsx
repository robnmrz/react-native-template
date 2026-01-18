// GlassTabBar.tsx
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import React from "react";
import { Pressable, Text, View, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const GlassTabBar: React.FC<BottomTabBarProps> = ({
    state,
    descriptors,
    navigation,
}) => {
    const insets = useSafeAreaInsets();
    const scheme = useColorScheme();
    const isDark = scheme === "dark";

    // Colors tuned for contrast on dark backgrounds
    const COLORS = {
        // Focused pill
        pillBg: isDark ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.30)",
        pillBorder: isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.04)",
        // Icons/text
        iconFocused: isDark ? "rgba(255,255,255,0.95)" : "#111827",
        iconIdle: isDark ? "rgba(255,255,255,0.75)" : "#6B7280",
        label: isDark ? "#FFFFFF" : "#111827",
        ripple: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
    };

    return (
        <View pointerEvents="box-none" className="absolute inset-x-0 bottom-0">
            <View
                className="px-4"
                style={{ paddingBottom: Math.max(insets.bottom, 0) }}
            >
                <BlurView
                    intensity={isDark ? 45 : 20} // stronger blur on dark
                    tint={isDark ? "dark" : "light"}
                    className="overflow-hidden rounded-full shadow-lg
           bg-light-bg dark:bg-dark-bg"
                    style={{
                        elevation: 22,
                        shadowOpacity: 0.25,
                        shadowRadius: 12,
                        shadowOffset: { width: 0, height: 6 },
                    }}
                >
                    <View className="flex-row gap-1.5 p-1.5">
                        {state.routes.map((route, index) => {
                            const { options } = descriptors[route.key];
                            const focused = state.index === index;

                            const label =
                                (options.tabBarLabel as string) ??
                                options.title ??
                                route.name;

                            const onPress = () => {
                                const event = navigation.emit({
                                    type: "tabPress",
                                    target: route.key,
                                    canPreventDefault: true,
                                });
                                if (!focused && !event.defaultPrevented) {
                                    navigation.navigate(route.name as never);
                                }
                            };

                            const onLongPress = () => {
                                navigation.emit({
                                    type: "tabLongPress",
                                    target: route.key,
                                });
                            };

                            const icon =
                                options.tabBarIcon?.({
                                    focused,
                                    color: focused
                                        ? COLORS.iconFocused
                                        : COLORS.iconIdle,
                                    size: 20,
                                }) ?? null;

                            return (
                                <Pressable
                                    key={route.key}
                                    onPress={onPress}
                                    onLongPress={onLongPress}
                                    accessibilityRole="button"
                                    accessibilityState={
                                        focused ? { selected: true } : {}
                                    }
                                    accessibilityLabel={
                                        options.tabBarAccessibilityLabel
                                    }
                                    android_ripple={{
                                        color: COLORS.ripple,
                                        borderless: false,
                                    }}
                                    style={[
                                        {
                                            flex: 1,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: 999,
                                            paddingVertical: 10,
                                        },
                                        focused && {
                                            backgroundColor: isDark
                                                ? "hsla(0, 0%, 15%, 0.6)"
                                                : "hsla(0, 0%, 100%, 0.6)",
                                            borderWidth: 1,
                                            borderColor: isDark
                                                ? "hsl(0, 0%, 55%)"
                                                : "hsl(0, 0%, 85%)",
                                        },
                                    ]}
                                >
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            gap: 8,
                                        }}
                                    >
                                        {icon}
                                        {focused && (
                                            <Text
                                                numberOfLines={1}
                                                style={{
                                                    fontSize: 13,
                                                    fontWeight: "600",
                                                    color: isDark
                                                        ? "hsl(0, 0%, 95%)"
                                                        : "hsl(0, 0%, 0%)",
                                                }}
                                            >
                                                {label}
                                            </Text>
                                        )}
                                    </View>
                                </Pressable>
                            );
                        })}
                    </View>
                </BlurView>
            </View>
        </View>
    );
};

export default GlassTabBar;
