import { z } from 'zod';
export declare const PortfolioDashboardProperty: z.ZodObject<{
    propertyId: z.ZodString;
    legalEntityId: z.ZodString;
    propertyName: z.ZodString;
    legalEntityName: z.ZodString;
    iconUrl: z.ZodNullable<z.ZodString>;
    address: z.ZodObject<{
        line1: z.ZodString;
        line2: z.ZodNullable<z.ZodString>;
        line3: z.ZodNullable<z.ZodString>;
        cityLocality: z.ZodString;
        stateRegion: z.ZodString;
        postalCode: z.ZodString;
        country: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        line1: string;
        line2: string | null;
        line3: string | null;
        cityLocality: string;
        stateRegion: string;
        postalCode: string;
        country: string;
    }, {
        line1: string;
        line2: string | null;
        line3: string | null;
        cityLocality: string;
        stateRegion: string;
        postalCode: string;
        country: string;
    }>;
    monthlyDistribution: z.ZodNullable<z.ZodNumber>;
    cashflowSchedule: z.ZodNullable<z.ZodType<import("./json").JsonT, z.ZodTypeDef, import("./json").JsonT>>;
    currentEquity: z.ZodNullable<z.ZodNumber>;
    sumDistributionTotal: z.ZodNumber;
    sumDistributionRental: z.ZodNumber;
    sumDistributionSpecial: z.ZodNumber;
    lastDistributionTotal: z.ZodNumber;
    lastDistributionMonth: z.ZodNullable<z.ZodDate>;
    months: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    propertyId: string;
    legalEntityId: string;
    propertyName: string;
    legalEntityName: string;
    currentEquity: number | null;
    sumDistributionTotal: number;
    sumDistributionRental: number;
    sumDistributionSpecial: number;
    lastDistributionTotal: number;
    lastDistributionMonth: Date | null;
    months: number | null;
    iconUrl: string | null;
    address: {
        line1: string;
        line2: string | null;
        line3: string | null;
        cityLocality: string;
        stateRegion: string;
        postalCode: string;
        country: string;
    };
    monthlyDistribution: number | null;
    cashflowSchedule: import("./json").JsonT;
}, {
    propertyId: string;
    legalEntityId: string;
    propertyName: string;
    legalEntityName: string;
    currentEquity: number | null;
    sumDistributionTotal: number;
    sumDistributionRental: number;
    sumDistributionSpecial: number;
    lastDistributionTotal: number;
    lastDistributionMonth: Date | null;
    months: number | null;
    iconUrl: string | null;
    address: {
        line1: string;
        line2: string | null;
        line3: string | null;
        cityLocality: string;
        stateRegion: string;
        postalCode: string;
        country: string;
    };
    monthlyDistribution: number | null;
    cashflowSchedule: import("./json").JsonT;
}>;
export declare type PortfolioDashboardPropertyT = z.infer<typeof PortfolioDashboardProperty>;
export declare const ListingsProperty: z.ZodObject<{
    propertyId: z.ZodString;
    name: z.ZodString;
    address: z.ZodObject<{
        line1: z.ZodString;
        line2: z.ZodNullable<z.ZodString>;
        line3: z.ZodNullable<z.ZodString>;
        cityLocality: z.ZodString;
        stateRegion: z.ZodString;
        postalCode: z.ZodString;
        country: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        line1: string;
        line2: string | null;
        line3: string | null;
        cityLocality: string;
        stateRegion: string;
        postalCode: string;
        country: string;
    }, {
        line1: string;
        line2: string | null;
        line3: string | null;
        cityLocality: string;
        stateRegion: string;
        postalCode: string;
        country: string;
    }>;
    areaUnits: z.ZodNullable<z.ZodString>;
    areaLiving: z.ZodNullable<z.ZodNumber>;
    numUnits: z.ZodNullable<z.ZodNumber>;
    cardImageUrl: z.ZodNullable<z.ZodString>;
    listingIrr: z.ZodNumber;
    listingCashDist: z.ZodNumber;
    mdlEquity: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    propertyId: string;
    mdlEquity: number | null;
    address: {
        line1: string;
        line2: string | null;
        line3: string | null;
        cityLocality: string;
        stateRegion: string;
        postalCode: string;
        country: string;
    };
    name: string;
    areaUnits: string | null;
    areaLiving: number | null;
    numUnits: number | null;
    cardImageUrl: string | null;
    listingIrr: number;
    listingCashDist: number;
}, {
    propertyId: string;
    mdlEquity: number | null;
    address: {
        line1: string;
        line2: string | null;
        line3: string | null;
        cityLocality: string;
        stateRegion: string;
        postalCode: string;
        country: string;
    };
    name: string;
    areaUnits: string | null;
    areaLiving: number | null;
    numUnits: number | null;
    cardImageUrl: string | null;
    listingIrr: number;
    listingCashDist: number;
}>;
export declare type ListingsPropertyT = z.infer<typeof ListingsProperty>;
export declare const PortfolioPropertyDetail: z.ZodObject<{
    mdlPurchasePrice: z.ZodNullable<z.ZodNumber>;
    mdlClosingCost: z.ZodNullable<z.ZodNumber>;
    mdlOriginationFee: z.ZodNullable<z.ZodNumber>;
    mdlBrokerFee: z.ZodNullable<z.ZodNumber>;
    mdlRenovation: z.ZodNullable<z.ZodNumber>;
    mdlCapexReserve: z.ZodNullable<z.ZodNumber>;
    mdlPrincipalReserve: z.ZodNullable<z.ZodNumber>;
    mdlMortgage: z.ZodNullable<z.ZodNumber>;
    mdlEquity: z.ZodNullable<z.ZodNumber>;
    address: z.ZodObject<{
        line1: z.ZodString;
        line2: z.ZodNullable<z.ZodString>;
        line3: z.ZodNullable<z.ZodString>;
        cityLocality: z.ZodString;
        stateRegion: z.ZodString;
        postalCode: z.ZodString;
        country: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        line1: string;
        line2: string | null;
        line3: string | null;
        cityLocality: string;
        stateRegion: string;
        postalCode: string;
        country: string;
    }, {
        line1: string;
        line2: string | null;
        line3: string | null;
        cityLocality: string;
        stateRegion: string;
        postalCode: string;
        country: string;
    }>;
    name: z.ZodNullable<z.ZodString>;
    areaUnits: z.ZodNullable<z.ZodString>;
    areaLiving: z.ZodNullable<z.ZodNumber>;
    numUnits: z.ZodNullable<z.ZodNumber>;
    id: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    imageUrls: z.ZodArray<z.ZodString>;
    numBeds: z.ZodNullable<z.ZodNumber>;
    numBaths: z.ZodNullable<z.ZodNumber>;
    numStories: z.ZodNullable<z.ZodNumber>;
    areaLotSize: z.ZodNullable<z.ZodNumber>;
    descriptionMarkdown: z.ZodNullable<z.ZodString>;
    occupancyStatus: z.ZodNullable<z.ZodString>;
    isUnderRenovation: z.ZodBoolean;
    ccyCode: z.ZodNullable<z.ZodString>;
    rentalIncomeMonthlyCurrent: z.ZodNullable<z.ZodNumber>;
    rentalIncomeMonthlyTarget: z.ZodNullable<z.ZodNumber>;
} & {
    mdlCurrentMortgage: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    mdlPurchasePrice: number | null;
    mdlClosingCost: number | null;
    mdlOriginationFee: number | null;
    mdlBrokerFee: number | null;
    mdlRenovation: number | null;
    mdlCapexReserve: number | null;
    mdlPrincipalReserve: number | null;
    mdlMortgage: number | null;
    mdlEquity: number | null;
    address: {
        line1: string;
        line2: string | null;
        line3: string | null;
        cityLocality: string;
        stateRegion: string;
        postalCode: string;
        country: string;
    };
    name: string | null;
    areaUnits: string | null;
    areaLiving: number | null;
    numUnits: number | null;
    id: string;
    description: string | null;
    imageUrls: string[];
    numBeds: number | null;
    numBaths: number | null;
    numStories: number | null;
    areaLotSize: number | null;
    descriptionMarkdown: string | null;
    occupancyStatus: string | null;
    isUnderRenovation: boolean;
    ccyCode: string | null;
    rentalIncomeMonthlyCurrent: number | null;
    rentalIncomeMonthlyTarget: number | null;
    mdlCurrentMortgage: number | null;
}, {
    mdlPurchasePrice: number | null;
    mdlClosingCost: number | null;
    mdlOriginationFee: number | null;
    mdlBrokerFee: number | null;
    mdlRenovation: number | null;
    mdlCapexReserve: number | null;
    mdlPrincipalReserve: number | null;
    mdlMortgage: number | null;
    mdlEquity: number | null;
    address: {
        line1: string;
        line2: string | null;
        line3: string | null;
        cityLocality: string;
        stateRegion: string;
        postalCode: string;
        country: string;
    };
    name: string | null;
    areaUnits: string | null;
    areaLiving: number | null;
    numUnits: number | null;
    id: string;
    description: string | null;
    imageUrls: string[];
    numBeds: number | null;
    numBaths: number | null;
    numStories: number | null;
    areaLotSize: number | null;
    descriptionMarkdown: string | null;
    occupancyStatus: string | null;
    isUnderRenovation: boolean;
    ccyCode: string | null;
    rentalIncomeMonthlyCurrent: number | null;
    rentalIncomeMonthlyTarget: number | null;
    mdlCurrentMortgage: number | null;
}>;
export declare type PortfolioPropertyDetailT = z.infer<typeof PortfolioPropertyDetail>;
export declare const ListingsPropertyDetail: z.ZodObject<{
    mdlPurchasePrice: z.ZodNullable<z.ZodNumber>;
    mdlClosingCost: z.ZodNullable<z.ZodNumber>;
    mdlOriginationFee: z.ZodNullable<z.ZodNumber>;
    mdlBrokerFee: z.ZodNullable<z.ZodNumber>;
    mdlRenovation: z.ZodNullable<z.ZodNumber>;
    mdlCapexReserve: z.ZodNullable<z.ZodNumber>;
    mdlPrincipalReserve: z.ZodNullable<z.ZodNumber>;
    mdlMortgage: z.ZodNullable<z.ZodNumber>;
    mdlEquity: z.ZodNullable<z.ZodNumber>;
    address: z.ZodObject<{
        line1: z.ZodString;
        line2: z.ZodNullable<z.ZodString>;
        line3: z.ZodNullable<z.ZodString>;
        cityLocality: z.ZodString;
        stateRegion: z.ZodString;
        postalCode: z.ZodString;
        country: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        line1: string;
        line2: string | null;
        line3: string | null;
        cityLocality: string;
        stateRegion: string;
        postalCode: string;
        country: string;
    }, {
        line1: string;
        line2: string | null;
        line3: string | null;
        cityLocality: string;
        stateRegion: string;
        postalCode: string;
        country: string;
    }>;
    name: z.ZodNullable<z.ZodString>;
    areaUnits: z.ZodNullable<z.ZodString>;
    areaLiving: z.ZodNullable<z.ZodNumber>;
    numUnits: z.ZodNullable<z.ZodNumber>;
    id: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    imageUrls: z.ZodArray<z.ZodString>;
    numBeds: z.ZodNullable<z.ZodNumber>;
    numBaths: z.ZodNullable<z.ZodNumber>;
    numStories: z.ZodNullable<z.ZodNumber>;
    areaLotSize: z.ZodNullable<z.ZodNumber>;
    descriptionMarkdown: z.ZodNullable<z.ZodString>;
    occupancyStatus: z.ZodNullable<z.ZodString>;
    isUnderRenovation: z.ZodBoolean;
    ccyCode: z.ZodNullable<z.ZodString>;
    rentalIncomeMonthlyCurrent: z.ZodNullable<z.ZodNumber>;
    rentalIncomeMonthlyTarget: z.ZodNullable<z.ZodNumber>;
} & {
    listingIrr: z.ZodNumber;
    listingCashDist: z.ZodNumber;
    keyDistances: z.ZodString;
    whyLove1: z.ZodString;
    whyLove2: z.ZodString;
    whyLove3: z.ZodString;
    hasInterest: z.ZodBoolean;
    interestAmt: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    mdlPurchasePrice: number | null;
    mdlClosingCost: number | null;
    mdlOriginationFee: number | null;
    mdlBrokerFee: number | null;
    mdlRenovation: number | null;
    mdlCapexReserve: number | null;
    mdlPrincipalReserve: number | null;
    mdlMortgage: number | null;
    mdlEquity: number | null;
    address: {
        line1: string;
        line2: string | null;
        line3: string | null;
        cityLocality: string;
        stateRegion: string;
        postalCode: string;
        country: string;
    };
    name: string | null;
    areaUnits: string | null;
    areaLiving: number | null;
    numUnits: number | null;
    listingIrr: number;
    listingCashDist: number;
    id: string;
    description: string | null;
    imageUrls: string[];
    numBeds: number | null;
    numBaths: number | null;
    numStories: number | null;
    areaLotSize: number | null;
    descriptionMarkdown: string | null;
    occupancyStatus: string | null;
    isUnderRenovation: boolean;
    ccyCode: string | null;
    rentalIncomeMonthlyCurrent: number | null;
    rentalIncomeMonthlyTarget: number | null;
    keyDistances: string;
    whyLove1: string;
    whyLove2: string;
    whyLove3: string;
    hasInterest: boolean;
    interestAmt: number | null;
}, {
    mdlPurchasePrice: number | null;
    mdlClosingCost: number | null;
    mdlOriginationFee: number | null;
    mdlBrokerFee: number | null;
    mdlRenovation: number | null;
    mdlCapexReserve: number | null;
    mdlPrincipalReserve: number | null;
    mdlMortgage: number | null;
    mdlEquity: number | null;
    address: {
        line1: string;
        line2: string | null;
        line3: string | null;
        cityLocality: string;
        stateRegion: string;
        postalCode: string;
        country: string;
    };
    name: string | null;
    areaUnits: string | null;
    areaLiving: number | null;
    numUnits: number | null;
    listingIrr: number;
    listingCashDist: number;
    id: string;
    description: string | null;
    imageUrls: string[];
    numBeds: number | null;
    numBaths: number | null;
    numStories: number | null;
    areaLotSize: number | null;
    descriptionMarkdown: string | null;
    occupancyStatus: string | null;
    isUnderRenovation: boolean;
    ccyCode: string | null;
    rentalIncomeMonthlyCurrent: number | null;
    rentalIncomeMonthlyTarget: number | null;
    keyDistances: string;
    whyLove1: string;
    whyLove2: string;
    whyLove3: string;
    hasInterest: boolean;
    interestAmt: number | null;
}>;
export declare type ListingsPropertyDetailT = z.infer<typeof ListingsPropertyDetail>;
export declare const ListingsMutateInterestRequestParams: z.ZodObject<{
    propertyId: z.ZodString;
    hasInterest: z.ZodBoolean;
    interestAmt: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    propertyId: string;
    hasInterest: boolean;
    interestAmt: number | null;
}, {
    propertyId: string;
    hasInterest: boolean;
    interestAmt: number | null;
}>;
export declare type ListingsMutateInterestRequestParamsT = z.infer<typeof ListingsMutateInterestRequestParams>;
