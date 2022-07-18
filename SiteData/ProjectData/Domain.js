import Frontend from './Frontend';
import Backend from './Backend';
import DataVisualization from './DataVisualization';
import Thumb1 from '../.././public/project/domain/frontend.svg';
import Thumb2 from '../.././public/project/domain/backend.svg';
import Thumb3 from '../.././public/project/domain/datavisualization.svg';
const defaultThumb = "https://res.cloudinary.com/earthian/image/upload/v1658160526/defaultThumb_ssfxrh.svg";
module.exports = [
    {
        title: 'Frontend Projects',
        slug: 'frontend',
        projects: Frontend,
        thumbnail: Thumb1,
        description: 'This is a list of frontend projects I have worked on.',
    },
    {
        title: 'Backend Projects',
        slug: 'backend',
        projects: Backend,
        thumbnail: Thumb2,
        description: 'This is a list of backend projects I have worked on.',
    },
    {
        title: 'Data Visualization Projects',   
        slug: 'data-visualization',
        projects: DataVisualization,
        thumbnail: Thumb3,
        description: 'This is a list of data visualization projects I have worked on.',
    }
];