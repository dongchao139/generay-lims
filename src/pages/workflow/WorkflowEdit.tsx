import React, {useCallback, useRef, useEffect, useState} from 'react';
import LogicFlow from '@logicflow/core';

const WorkflowEdit: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const lf = new LogicFlow({
            container: containerRef.current || document.createElement('div'),
            stopScrollGraph: true,
            stopZoomGraph: true,
            grid: {
                type: 'dot',
                size: 20
            },
            width: window.innerWidth,
            height: window.innerHeight
        });
        lf.render({
            nodes: [
                {id: 50, type: 'rect',x: 100,y: 70, text: '你好'},
                {id: 21, type: 'circle',x: 300,y:70, text: '你好'},
            ],
            edges: [
                {
                    type: 'polyline',
                    sourceNodeId: 50,
                    targetNodeId: 21,
                }
            ]
        })
    },[]);
    return (
        <div ref={containerRef}></div>
    )
}


export default WorkflowEdit;