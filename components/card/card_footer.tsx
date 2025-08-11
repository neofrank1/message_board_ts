import { CardFooterType } from "./cardType";

function CardFooter({ className, children }: CardFooterType) {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    );
}

export default CardFooter;