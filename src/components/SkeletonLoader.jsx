
import Skeleton from 'react-loading-skeleton';

const SkeletonLoader = () => {
    // Repeat the skeleton structure for each user
    const skeletons = Array.from({ length: 12 }, (_, index) => (
        <div key={index}>
            <Skeleton height={100} baseColor='white' highlightColor='#555' width={250} />
            <Skeleton height={20} highlightColor='#555' width={250} style={{ marginTop: '10px' }} />
            <Skeleton height={20} highlightColor='#555' width={250} style={{ marginTop: '5px' }} />
        </div>
    ));

    return <>{skeletons}</>;
};

export default SkeletonLoader;
