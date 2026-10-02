import Image from "next/image";
import OfferItem from "./OfferItem";

type PricingPlan = {
  unit_amount: number;
  nickname: string;
};

const SinglePricing = ({ price }: { price: PricingPlan }) => {
  return (
    <div className="wow fadeInUp pricing-item-border relative z-20 overflow-hidden rounded-3xl bg-dark px-8 pb-10 pt-12.5 xl:px-10">
      <span className="absolute right-9 top-9">
        <Image
          src={
            price.nickname === "Small"
              ? "./images/pricing/pricing-icon-01.svg"
              : price.nickname === "Medium"
                ? "./images/pricing/pricing-icon-02.svg"
                : "./images/pricing/pricing-icon-03.svg"
          }
          alt="icon"
          width={44}
          height={44}
        />
      </span>

      <h3 className="mb-5.5 text-heading-6 font-semibold text-white">
        {price.nickname === "Small" && "Starter"}
        {price.nickname === "Medium" && "Medium"}
        {price.nickname === "Large" && "Business"}
      </h3>

      <div className="flex items-center gap-3.5">
        <h2 className="pricing-gradient-text text-custom-1 font-bold">
          ${" "}
          {(price.unit_amount / 100).toLocaleString("en-US", {
            currency: "USD",
          })}
        </h2>

        <p className="font-medium">
          /month <br />
          (billed annually)
        </p>
      </div>

      <div className="pricing-gradient-divider my-10 h-[1px] w-full"></div>

      {price.nickname === "Small" && (
        <ul className="flex flex-col gap-4">
          <OfferItem text="Subscription with levels" />
          <OfferItem text="Advanced features included" />
          <OfferItem text="Shared workspaces & tools" />
          <OfferItem text="Premium versions functionality" />
          <OfferItem text="Customizing the outputs" />
          <OfferItem text="Priority customer support" />
        </ul>
      )}

      {price.nickname === "Medium" && (
        <ul className="flex flex-col gap-4">
          <OfferItem text="Subscription with levels" />
          <OfferItem text="Advanced features included" />
          <OfferItem text="Shared workspaces & tools" />
          <OfferItem text="Premium versions functionality" />
          <OfferItem text="Customizing the outputs" />
          <OfferItem text="Priority customer support" />
        </ul>
      )}
      {price.nickname === "Large" && (
        <ul className="flex flex-col gap-4">
          <OfferItem text="Subscription with levels" />
          <OfferItem text="Advanced features included" />
          <OfferItem text="Shared workspaces & tools" />
          <OfferItem text="Premium versions functionality" />
          <OfferItem text="Customizing the outputs" />
          <OfferItem text="Priority customer support" />
        </ul>
      )}

      {/* <!-- bg shapes --> */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <span className="absolute bottom-0 left-0 -z-1 aspect-370/553 w-full">
          <Image
            src="/images/blur/blur-16.svg"
            alt="blur-sm"
            fill
            className="max-w-none"
          />
        </span>
        <span className="absolute left-0 top-0 -z-1 aspect-370/350 w-full">
          <Image
            src="/images/blur/blur-17.svg"
            alt="blur-sm"
            fill
            className="max-w-none"
          />
        </span>
      </div>
    </div>
  );
};

export default SinglePricing;
