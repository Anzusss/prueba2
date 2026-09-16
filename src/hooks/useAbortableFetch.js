// src/hooks/useAbortableFetch.js
import { useState, useEffect, useRef, useCallback } from 'react';

export const useAbortableFetch = (asyncFunction, immediate = true) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Referencia para el AbortController
    const abortControllerRef = useRef(null);

    const execute = useCallback(async (...args) => {
        // Si hay una petición anterior en curso, la cancelamos
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        const controller = new AbortController();
        abortControllerRef.current = controller;

        setLoading(true);
        setError(null);

        try {
            const result = await asyncFunction(controller.signal, ...args);
            setData(result);
            return result;
        } catch (err) {
            if (err.name !== 'AbortError') {
                setError(err.message || 'Ocurrió un error al cargar los datos.');
            }
        } finally {
            setLoading(false);
        }
    }, [asyncFunction]);

    useEffect(() => {
        if (immediate) {
            execute();
        }
        // Cleanup al desmontar el componente
        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, [execute, immediate]);

    return { data, setData, loading, error, refetch: execute };
};