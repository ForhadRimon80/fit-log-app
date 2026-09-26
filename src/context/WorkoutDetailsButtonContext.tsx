'use client'
import React, { ReactNode, useState } from 'react';
import { createContext } from 'react';

const WorkoutDetailsButtonContext = createContext({})

const WorkoutProvider = ({ children }: { children: ReactNode }) => {

    const [addToTodaysPlan, setAddToTodaysPlan] = useState([])
    const [saveForLater, setSaveForLater] = useState([])

    const sharedState = {
        addToTodaysPlan,
        setAddToTodaysPlan,
        saveForLater,
        setSaveForLater
    }

    return (
        <WorkoutDetailsButtonContext.Provider value={sharedState}>{children}</WorkoutDetailsButtonContext.Provider>
    );
};

export default WorkoutProvider;