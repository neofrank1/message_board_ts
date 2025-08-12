import { CardHeaderType } from "./cardType";

function CardHeader({ className, children }: CardHeaderType) {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    );
}

export default CardHeader;