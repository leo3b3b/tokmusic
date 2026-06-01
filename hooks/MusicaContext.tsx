import React, { createContext, useContext, useState } from "react";
import { MUSICAS, Musica } from "../constants/musicas";

type MusicaComCurtida = Musica & { curtida: boolean };

type MusicaContextType = {
    musicas: MusicaComCurtida[];
    curtidas: MusicaComCurtida[];
    toggleCurtida: (id: string) => void;
};

const MusicaContext = createContext<MusicaContextType | null>(null);

export function MusicaProvider({ children }: { children: React.ReactNode }) {
    const [musicas, setMusicas] = useState<MusicaComCurtida[]>(
        MUSICAS.map((m) => ({ ...m, curtida: false }))
    );

    const curtidas = musicas.filter((m) => m.curtida);

    function toggleCurtida(id: string) {
        setMusicas((prev) =>
            prev.map((m) => (m.id === id ? { ...m, curtida: !m.curtida } : m))
        );
    }

    return (
        <MusicaContext.Provider value={{ musicas, curtidas, toggleCurtida }}>
            {children}
        </MusicaContext.Provider>
    );
}

export function useMusicas() {
    const ctx = useContext(MusicaContext);
    if (!ctx) throw new Error("useMusicas deve ser usado dentro de MusicaProvider");
    return ctx;
}