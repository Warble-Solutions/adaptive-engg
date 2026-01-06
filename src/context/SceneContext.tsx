"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type SceneVariant = 'network' | 'waves' | 'grid';

type SceneState = {
    primaryColor: string;
    secondaryColor: string;
    speed: number;
    variant: SceneVariant;
};

type SceneContextType = {
    scene: SceneState;
    setScene: (state: SceneState) => void;
};

const defaultScene: SceneState = {
    primaryColor: "#049A89", // Default Teal
    secondaryColor: "#0F172A", // Slate 900
    speed: 1,
    variant: 'network',
};

const SceneContext = createContext<SceneContextType | undefined>(undefined);

export function SceneProvider({ children }: { children: ReactNode }) {
    const [scene, setScene] = useState<SceneState>(defaultScene);

    return (
        <SceneContext.Provider value={{ scene, setScene }}>
            {children}
        </SceneContext.Provider>
    );
}

export function useScene() {
    const context = useContext(SceneContext);
    if (context === undefined) {
        throw new Error("useScene must be used within a SceneProvider");
    }
    return context;
}
