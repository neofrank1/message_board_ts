import CardFooter from './card_footer';
import CardBody from './card_body';
import CardHeader from './card_header';

function Card() {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <CardHeader />
            <CardBody />
            <CardFooter />
        </div>
    );
}

export default Card