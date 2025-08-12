import { CardBodyType } from "./cardType";

function CardBody({ className, children }: CardBodyType) {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    );
}

export default CardBody;