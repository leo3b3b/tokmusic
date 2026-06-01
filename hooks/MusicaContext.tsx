import { MUSICAS, Musica } from '@/constants/musicas';
import React, { createContext, useContext, useState } from 'react';

// ─── Tipos ────────────────────────────────────────────────────

export type MusicaComCurtida = Musica & { curtida: boolean };

export type Playlist = {
    id: string;
    nome: string;
    musicaIds: string[];
};

type MusicaContextType = {
    musicas: MusicaComCurtida[];
    curtidas: MusicaComCurtida[];
    toggleCurtida: (id: string) => void;
    playlists: Playlist[];
    criarPlaylist: (nome: string) => void;
    adicionarMusica: (playlistId: string, musicaId: string) => void;
    removerMusica: (playlistId: string, musicaId: string) => void;
    getMusicaById: (id: string) => MusicaComCurtida | undefined;
    getPlaylistMusicas: (playlist: Playlist) => MusicaComCurtida[];
};

// ─── Context ──────────────────────────────────────────────────

const MusicaContext = createContext<MusicaContextType | null>(null);

// ─── Provider ─────────────────────────────────────────────────

export function MusicaProvider({ children }: { children: React.ReactNode }) {
    const [musicas, setMusicas] = useState<MusicaComCurtida[]>(
        MUSICAS.map((m) => ({ ...m, curtida: false }))
    );

    const [playlists, setPlaylists] = useState<Playlist[]>([]);

    const curtidas = musicas.filter((m) => m.curtida);

    function toggleCurtida(id: string) {
        setMusicas((prev) =>
            prev.map((m) => (m.id === id ? { ...m, curtida: !m.curtida } : m))
        );
    }

    function criarPlaylist(nome: string) {
        const novaPlaylist: Playlist = {
            id: Date.now().toString(),
            nome: nome.trim(),
            musicaIds: [],
        };
        setPlaylists((prev) => [...prev, novaPlaylist]);
    }

    function adicionarMusica(playlistId: string, musicaId: string) {
        setPlaylists((prev) =>
            prev.map((p) =>
                p.id === playlistId && !p.musicaIds.includes(musicaId)
                    ? { ...p, musicaIds: [...p.musicaIds, musicaId] }
                    : p
            )
        );
    }

    function removerMusica(playlistId: string, musicaId: string) {
        setPlaylists((prev) =>
            prev.map((p) =>
                p.id === playlistId
                    ? { ...p, musicaIds: p.musicaIds.filter((id) => id !== musicaId) }
                    : p
            )
        );
    }

    function getMusicaById(id: string) {
        return musicas.find((m) => m.id === id);
    }

    function getPlaylistMusicas(playlist: Playlist) {
        return playlist.musicaIds
            .map((id) => musicas.find((m) => m.id === id))
            .filter(Boolean) as MusicaComCurtida[];
    }

    return (
        <MusicaContext.Provider
            value={{
                musicas,
                curtidas,
                toggleCurtida,
                playlists,
                criarPlaylist,
                adicionarMusica,
                removerMusica,
                getMusicaById,
                getPlaylistMusicas,
            }}
        >
            {children}
        </MusicaContext.Provider>
    );
}

// ─── Hook ─────────────────────────────────────────────────────

export function useMusicas() {
    const ctx = useContext(MusicaContext);
    if (!ctx) throw new Error('useMusicas deve ser usado dentro de MusicaProvider');
    return ctx;
}