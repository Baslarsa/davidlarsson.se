import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetchData = (query) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!query) return;

        const fetchData = async () => {
            setIsLoading(true);

            const response = await axios(query);
            setData(response.data);
            setIsLoading(false);
        };

        fetchData();
    }, [query]);

    return { isLoading, data };
};
