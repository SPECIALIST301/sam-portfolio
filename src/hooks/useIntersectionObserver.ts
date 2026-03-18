import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver<T extends HTMLElement = any>(options: IntersectionObserverInit = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const elementRef = useRef<T | null>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsIntersecting(true);
                // Unobserve after animating once for better performance
                observer.unobserve(element);
            }
        }, {
            threshold: 0.1, // Trigger when 10% of element is visible
            ...options
        });

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [options]);

    return [elementRef, isIntersecting] as const;
}
