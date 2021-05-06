import type React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

import { BackBtn } from '../../../../components';
import { H6, SubTitle1 } from '../../../../components/text';

// Source: https://docs.google.com/spreadsheets/d/1w7acu5FjTN3Sxs_kEoN0mZEjIDHr20ZY-vbqWZb4C_s/edit#gid=313667754

// TODO: switch to using markdown:
//   https://github.com/remarkjs/react-markdown
export const Faqs = ({ goBack }: { goBack: () => void }) => {
  return (
    <Box>
      <BackBtn handleClick={goBack} pos="absolute" />
      <H6 align="center">FAQ</H6>
      <Box h={2} />
      <Accordion allowToggle>
        <AccordionItem layerStyle="accordionColor">
          <AccordionButton>
            <SubTitle1 align="left">Who can invest with Coral?</SubTitle1>
            <AccordionIcon ml="auto" />
          </AccordionButton>
          <AccordionPanel pt={4}>
            <Text>
              To own properties through Coral, you must be a US resident (or foreign resident with a
              US tax ID), over the age of 18, who qualifies as an accredited investor.
            </Text>
            <br />
            <Text>
              You generally qualify as an accredited investor if any of the following are true:
            </Text>
            <br />
            <UnorderedList>
              <ListItem>Annual income greater than $200k (for the last 2 years)</ListItem>
              <ListItem>Joint household income greater than $300k (for the last 2 years)</ListItem>
              <ListItem>Net worth greater than $1M (excluding your primary residence)</ListItem>
            </UnorderedList>
            <br />
            For a complete definition of &quot;accredited investor&quot; and related criteria,{' '}
            <Link
              href="https://www.ecfr.gov/cgi-bin/retrieveECFR?gp=&SID=8edfd12967d69c024485029d968ee737&r=SECTION&n=17y3.0.1.1.12.0.46.176" // editorconfig-checker-disable-line
              isExternal
            >
              click here
            </Link>
            .
          </AccordionPanel>
        </AccordionItem>

        <Box bg="gray.300" p=".5px" />
        <AccordionItem layerStyle="accordionColor">
          <AccordionButton>
            <SubTitle1 align="left">How does a Coral investment work?</SubTitle1>
            <AccordionIcon ml="auto" />
          </AccordionButton>
          <AccordionPanel pt={4}>
            <Text>
              Select a Coral property, choose how many shares you want to own, and acquire
              fractional ownership of the property through a property-specific LLC.
            </Text>
            <br />

            <Text>
              You become a co-owner of the property, alongside of others like yourself (equity
              holders). Coral manages all financing, obtaining a bank loan (typically ~65% of the
              purchase price) to provide leverage.
            </Text>
            <br />

            <Text>
              Once your transaction is complete and the property is acquired, you receive any
              monthly distributions of pro rata net rental income (rents minus fees, expenses and
              additional reserve allocations) generated by the property, plus potential tax benefits
              normally associated with direct property ownership, such as appreciation, depreciation
              and expense write-offs.
            </Text>
            <br />

            <Text>
              Coral handles operational responsibilities of the property, and keeps you in the loop
              every step of the way. Coral ensures that any planned renovations get done, and that
              the property is well managed. Coral will manage any construction earn-outs or
              refinancing &mdash; ensuring that you&apos;re able to &quot;realize appreciation&quot;
              when the property rises in value. When you want to sell your allocation, we&apos;ll
              help with that too.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <Box bg="gray.300" p=".5px" />
        <AccordionItem layerStyle="accordionColor">
          <AccordionButton>
            <SubTitle1 align="left">How do I earn returns on my Coral investment? </SubTitle1>
            <AccordionIcon ml="auto" />
          </AccordionButton>
          <AccordionPanel pt={4}>
            <Text>
              Through Coral, you will have (fractional) direct ownership of a property. As a result,
              your returns can be generated through both recurring income (from rentals), and
              potential capital appreciation of the properties themselves.
            </Text>
            <br />
            <Text>
              <b>Income</b> &mdash; As a fractional owner, you are entitled to your pro-rata portion
              of any operating cash flow, distributed on a monthly basis. This distribution is paid
              out as &quot;return of capital&quot; until your initial investment is repaid.
            </Text>
            <br />

            <Text>
              <b>Capital Appreciation</b> &mdash; If and when Coral refinances or sells the
              property, you can expect to receive the return of capital (the value of your initial
              investment paid back) as well as any pro-rata capital gains.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <Box bg="gray.300" p=".5px" />
        <AccordionItem layerStyle="accordionColor">
          <AccordionButton>
            <SubTitle1 align="left">What is the Share Price of a property? </SubTitle1>
            <AccordionIcon ml="auto" />
          </AccordionButton>
          <AccordionPanel pt={4}>
            <Text>
              Each property has a total of 100 shares, so each share represents 1% ownership.
            </Text>
            <br />

            <Text>
              The share price of any given property is simply 1/100th of the{' '}
              <b>Total Property List Price</b> minus the loan value*. The total property list price*
              includes:
            </Text>
            <br />

            <OrderedList>
              <ListItem>
                the purchase price of the property itself, including closing costs{' '}
              </ListItem>
              <ListItem>
                the budget for planned renovations intended to force appreciation of the property
              </ListItem>
              <ListItem>
                and an initial reserve equal to 1% to 3% of the home price in cash to establish a
                reserve that is intended to help cover expenses associated with the home and{' '}
              </ListItem>
              <ListItem>an acquisition fee of 2% of the purchase price paid to Coral.</ListItem>
            </OrderedList>
            <br />

            <Text>
              <i>
                Note: ownership in earlier properties is based simply on investment amount rather
                than a &quot;share price.&quot;
              </i>
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <Box bg="gray.300" p=".5px" />
        <AccordionItem layerStyle="accordionColor">
          <AccordionButton>
            <SubTitle1 align="left">
              How do I know Coral is making property management decision that are in my best
              interest?
            </SubTitle1>
            <AccordionIcon ml="auto" />
          </AccordionButton>
          <AccordionPanel pt={4}>
            <Text>
              Coral co-invests alongside other property owners for 10% ownership of each property.
              We pay the same price per share as other owners who purchase the same property at the
              same time. We maintain this ownership position for a minimum of 2 years. As a result,
              Coral has a vested interest in the financial success of each property and has aligned
              interests with the other investors in the property.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <Box bg="gray.300" p=".5px" />
        <AccordionItem layerStyle="accordionColor">
          <AccordionButton>
            <SubTitle1 align="left">
              What is the term? When can I expect to get my money back?
            </SubTitle1>
            <AccordionIcon ml="auto" />
          </AccordionButton>
          <AccordionPanel pt={4}>
            <Text>
              Coral investments are intended to be long-term investments and are inherently illiquid
              in nature. We guarantee the option for liquidity to investors after approximately five
              years of operations based on fair market value of the property. If you want to exit
              within five years, we will help facilitate (but cannot guarantee).
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <Box bg="gray.300" p=".5px" />
        <AccordionItem layerStyle="accordionColor">
          <AccordionButton>
            <SubTitle1 align="left">
              Will I ever be required to contribute additional capital to a property I invest?
            </SubTitle1>
            <AccordionIcon ml="auto" />
          </AccordionButton>
          <AccordionPanel pt={4}>
            <Text>
              No, investors will never be required to contribute additional capital to a property
              they&apos;ve invested in. When Coral acquires a new property, the acquisition price
              includes any intended renovations and a small reserve for necessary repairs (e.g. a
              water heater breaks, the roof needs repairs). There will be no incremental capital
              calls.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
