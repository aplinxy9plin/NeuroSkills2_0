import { Edge, Node } from 'reactflow';
import { Course } from '@/entities/course';
import { Topic } from '@/entities/topic';

export const getNodesAndEdges = (course: Course, topics: Topic[]) => {
  const nodes: Node[] = [{ id: course.id, position: { x: 0, y: 0 }, data: { label: course.name }, type: 'course' }];
  const edges: Edge[] = [];

  let x = (topics.length / 2) * 300 * -1;
  topics = topics.sort((a, b) => a.order - b.order);
  topics.forEach((topic) => {
    nodes.push({ id: topic.id, position: { x, y: 100 }, data: { label: topic.name }, type: 'topic' });
    edges.push({ id: `e${course.id}-${topic.id}`, source: course.id, target: topic.id, type: 'step' });
    x += 300;
  });

  return { nodes, edges };
};
