import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactFlow, {
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
  DefaultEdgeOptions,
  Edge,
  FitViewOptions,
  MiniMap,
  Node,
  NodeTypes,
  OnEdgesChange,
  OnNodesChange,
} from 'reactflow';
import { selectCourseById } from '@/entities/course';
import { selectCourseTopics } from '@/entities/topic';
import { useAppSelector } from '@/shared/model';
import { getNodesAndEdges } from '../lib/helper';
import { CourseNode } from './CourseNode';
import { TopicNode } from './TopicNode';
import 'reactflow/dist/style.css';

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};

const nodeTypes: NodeTypes = {
  course: CourseNode,
  topic: TopicNode,
};

interface CourseMindMapProps {
  courseId: string;
}

export const CourseMindMap = (props: CourseMindMapProps) => {
  const navigate = useNavigate();
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  );
  const { courseId } = props;
  const course = useAppSelector((state: RootState) => selectCourseById(state, courseId || ''));
  const topics = useAppSelector((state: RootState) => selectCourseTopics(state, courseId || ''));

  useEffect(() => {
    if (course) {
      const { nodes: courseNodes, edges: courseEdges } = getNodesAndEdges(course, topics);
      setNodes(courseNodes);
      setEdges(courseEdges);
    }
  }, [courseId]);

  const handleNodeDoubleClick = (node: Node) => {
    if (node.type === 'topic') {
      navigate(`/course/2/topic/${node.id}`);
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        style={{ background: '#232B2B' }}
        onNodeDoubleClick={(e, node) => handleNodeDoubleClick(node)}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        fitViewOptions={fitViewOptions}
        defaultEdgeOptions={defaultEdgeOptions}
        nodeTypes={nodeTypes}
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
};
