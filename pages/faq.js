import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/_App/NavbarStyleFour";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const FAQ = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle1="Frequently" pageTitle2="Asked Questions" pageSubTitle='FIND THE RIGHT ANSWER' />

            <div className="faq-area ptb-80">
                <div className="container">
                    <div className="faq-accordion">
                        <Accordion allowZeroExpanded preExpanded={['a']}>
                            <AccordionItem uuid="a">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            How do I notify the IRS my address has changes?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="bt_bb_accordion_item_content"><div className="bt_bb_text">
                                        <div>
                                            <div>
                                                <p style={{ textAlign: 'left' }}>There are several ways to tell us your address has changed:</p>
                                                <table className="table complex-table table-striped table-bordered alignleft" border="1" summary="Information on the different methods to do an address change" cellSpacing="0" cellPadding="0">
                                                    <caption><b>Methods to Change Your Address</b></caption>
                                                    <thead>
                                                        <tr className="first-child">
                                                            <th className="first-child" scope="col"><b>Method</b></th>
                                                            <th className="last-child" scope="col"><b>Action</b></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>IRS form</td>
                                                            <td>Use <a title="Link to Form 8822" href="https://www.irs.gov/forms-pubs/about-form-8822" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="cddf1af8-55cf-47b2-b6d0-cb74ab015404">Form 8822, Change of Address</a> or <a title="Link to About Form 8822-B" href="https://www.irs.gov/forms-pubs/about-form-8822-b" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="de40f2f6-9f1b-4676-a092-56abaaf1095a">Form 8822-B, Change of Address or Responsible Party - Business</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tax return</td>
                                                            <td>Use your new address when you file</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Written statement</td>
                                                            <td>Send us a signed written statement with your:<p></p>
                                                                <ul>
                                                                    <li className="first-child">full name</li>
                                                                    <li>old address</li>
                                                                    <li>new address</li>
                                                                    <li className="last-child">social security number, ITIN, or EIN</li>
                                                                </ul>
                                                                <p>Mail your signed statement to the <a title="Link to Where to File Paper Tax Returns With or Without a Payment" href="https://www.irs.gov/filing/where-to-file-paper-tax-returns-with-or-without-a-payment" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="44e85633-0c49-46ac-9871-ae573948cc11">address</a> where you filed your last return.</p></td>
                                                        </tr>
                                                        <tr className="last-child">
                                                            <td>Oral notification</td>
                                                            <td>Tell us in person or by telephone. We'll need you to verify your identity and the address we have on file for you. Please have ready your:<p></p>
                                                                <ul>
                                                                    <li className="first-child">full name</li>
                                                                    <li>new address</li>
                                                                    <li>old address</li>
                                                                    <li>date of birth</li>
                                                                    <li className="last-child">social security number, ITIN or EIN</li>
                                                                </ul>
                                                                <p className="last-child">We may request additional information to verify your identity.</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <p style={{ textAlign: 'left' }}>If you filed a joint return, and are still residing with your spouse, both you and your spouse should provide your names, social security numbers, and signatures on the form or statement.</p>
                                                <p style={{ textAlign: 'left' }}>If you filed a joint return and you now have separate addresses, each of you should notify us of your new, separate address.</p>
                                                <p style={{ textAlign: 'left' }}>Authorized representatives filing a form or written statement to change an address for a taxpayer must attach a copy of their power of attorney or <a title="Link to About Form 2848" href="https://www.irs.gov/forms-pubs/about-form-2848" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="95a30957-f43b-41b3-aab5-eb93d42af1f2">Form 2848, Power of Attorney and Declaration of Representative</a>. Unauthorized third parties can't change a taxpayer's address.</p>
                                                <p style={{ textAlign: 'left' }}>Changes of address through the U.S. Postal Service (USPS) may update your address of record on file with us based on what they retain in their National Change of Address (NCOA) database. However, even when you notify the USPS, not all post offices forward government checks, so you should still notify us.</p>
                                                <p style={{ textAlign: 'left' }}>For changes of address relating to an employment tax return, we issue confirmation notices (Notices <a title="Link to Understanding Your CP148A Notice" href="https://www.irs.gov/individuals/understanding-your-cp148a-notice" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="4282b00d-13a4-4355-aa69-57757d724e87">148A</a> and <a title="Link to Understanding Your CP148B Notice" href="https://www.irs.gov/individuals/understanding-your-cp148b-notice" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="e45946ee-f592-44f2-8a12-d112e1c6e456">148B</a>) for the change to both the new and former address.</p>
                                                <p style={{ textAlign: 'left' }}>It can generally take four to six weeks after receipt for a change of address request to fully process.</p>
                                            </div>
                                        </div>
                                        <div style={{ textAlign: 'left' }}>
                                            <h6>Additional Information:</h6>
                                            <div>
                                                <ul>
                                                    <li><a href="https://www.irs.gov/pub/irs-utl/rp-10-16.pdf">Revenue Procedure 2010-16</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div style={{ textAlign: 'left' }}>
                                            <h6>Subcategory:</h6>
                                            <div><a href="https://www.irs.gov/faqs/irs-procedures/address-changes" hrefLang="en">Address Changes</a></div>
                                        </div>
                                        <div>
                                            <h6 style={{ textAlign: 'left' }}>Category:</h6>
                                            <div style={{ textAlign: 'left' }}><a href="https://www.irs.gov/faqs/irs-procedures" hrefLang="en">IRS Procedures</a></div>
                                        </div>
                                    </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="b">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Is there an age limit on claiming a child as a dependant?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="bt_bb_text">
                                        <div>
                                            <div>
                                                <div>
                                                    <p>To claim your child as your dependent, your child must meet either the qualifying child test or the qualifying relative test:</p>
                                                    <ul>
                                                        <li>To meet the <b>qualifying child test</b>, your child must be younger than you and either younger than 19 years old or be a “student” younger than 24 years old as of the end of the calendar year.</li>
                                                        <li>There's no age limit if your child is “permanently and totally disabled” or meets the <b>qualifying relative test</b>.</li>
                                                    </ul>
                                                    <p>In addition to meeting the qualifying child or qualifying relative test, you can claim that person as a dependent only if these three tests are met:</p>
                                                    <ol>
                                                        <li>Dependent taxpayer test</li>
                                                        <li>Citizen or resident test, and</li>
                                                        <li>Joint return test</li>
                                                    </ol>
                                                </div>
                                            </div>
                                            <div>
                                                <h6>Additional Information:</h6>
                                                <div>
                                                    <ul>
                                                        <li><a href="https://www.irs.gov/help/ita/whom-may-i-claim-as-a-dependent">Whom May I Claim as a Dependent?</a></li>
                                                        <li><a href="https://www.irs.gov/publications/p501">Publication 501, Dependents, Standard Deduction and Filing Information</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <h6>Subcategory:</h6>
                                                <div><a href="https://www.irs.gov/faqs/filing-requirements-status-dependents/dependents" hrefLang="en">Dependents</a></div>
                                            </div>
                                            <div>
                                                <h6>Category:</h6>
                                                <div><a href="https://www.irs.gov/faqs/filing-requirements-status-dependents" hrefLang="en">Filing Requirements, Status, Dependents</a></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{ textAlign: 'left' }}></div>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="c">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            How much income can an independent student make before he or she has to file an income tax return?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="panel-body">
                                        <div>
                                            <h6>Answer:</h6>
                                            <div>
                                                <p>An unmarried dependent student must file a tax return if his or her earned or unearned income exceeds certain limits. To find these limits, refer to <em>Dependents</em> under <em>Who Must File</em> in <a title="About Publication 501" href="https://www.irs.gov/forms-pubs/about-publication-501" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="69945ad0-0e71-41b9-89dc-f89e48905ace">Publication 501, Dependents, Standard Deduction and Filing Information</a>. You can also refer to <a title="Do I Need to File a Tax Return?" href="https://www.irs.gov/help/ita/do-i-need-to-file-a-tax-return" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="37bb2d05-28a2-42ef-a48a-c3d152067416">Do I Need to File a Tax Return?</a>&nbsp;to see if your income requires you to file.</p>
                                                <p>Even if you don't have to file a federal income tax return, you should file if you can get money back (for example, you had federal income tax withheld from your pay or you qualify for a refundable tax credit). See <i>Who Should File</i> in Publication 501 for more examples.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h6>Additional Information:</h6>
                                            <div>
                                                <ul>
                                                    <li><a href="https://www.irs.gov/individuals/students">Tax Information for Students</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <h6>Subcategory:</h6>
                                            <div><a href="https://www.irs.gov/faqs/filing-requirements-status-dependents/filing-requirements" hrefLang="en">Filing Requirements</a></div>
                                        </div>
                                        <div>
                                            <h6>Category:</h6>
                                            <div><a href="https://www.irs.gov/faqs/filing-requirements-status-dependents" hrefLang="en">Filing Requirements, Status, Dependents</a></div>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="d">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Can I receive a tax return if I am currently making payments under an installed agreement or payment plan for another federal tax period?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="panel-body">
                                        <div>
                                            <div>
                                                <div>
                                                    <p>No, one of the conditions of your installment agreement is that the IRS will automatically apply any refund (or overpayment) due to you against taxes you owe. Because your refund isn't applied toward your regular monthly payment, continue making your installment agreement payments as scheduled.</p>
                                                    <p>If your refund exceeds your total balance due on all outstanding tax liabilities including accruals, you'll receive a refund of the excess unless you owe certain other past-due amounts, such as&nbsp; state income tax, child support, a student loan, or other federal nontax obligations which are offset against any refund. For more information on these non-IRS refund offsets, you can call the <a title="Bureau of the Fiscal Service" href="https://www.fiscal.treasury.gov/" data-entity-substitution="pup_linkit_media" data-entity-type="media" data-entity-uuid="27ad9434-5ce2-4092-8c7a-33912aeea80c">Bureau of the Fiscal Service</a> (BFS) at <a href="tel:800-304-3107">800-304-3107</a> (toll-free).</p>
                                                </div>
                                            </div>
                                            <div>
                                                <h6>Additional Information:</h6>
                                                <div>
                                                    <ul>
                                                        <li><a href="https://www.irs.gov/pub/irs-pdf/i9465.pdf">Instructions for Form 9465, Installment Agreement Request</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <h6>Subcategory:</h6>
                                                <div><a href="https://www.irs.gov/faqs/irs-procedures/refund-inquiries" hrefLang="en">Refund Inquiries</a></div>
                                            </div>
                                            <div>
                                                <h6>Category:</h6>
                                                <div><a href="https://www.irs.gov/faqs/irs-procedures" hrefLang="en">IRS Procedures</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="e">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            To qualify for head of household filing status, do I have to claim my child as a dependent?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="panel-body">
                                        <div>
                                            <div>
                                                <div>
                                                    <p>Generally, to qualify for head of household filing status, you must have a qualifying child or a dependent. However, a custodial parent may be eligible to claim head of household filing status based on a child even if he or she released a claim to exemption for the child. See <a title="Noncustodial parent is claiming an exemption for my child; do I still qualify as head of household?" href="https://www.irs.gov/faqs/filing-requirements-status-dependents/filing-status/filing-status-3" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="2ac49d55-31d3-4e77-9e0e-097c121815b2">Noncustodial parent is claiming an exemption for my child; do I still qualify as head of household?</a></p>
                                                </div>
                                            </div>
                                            <div>
                                                <h6>Additional Information:</h6>
                                                <div>
                                                    <ul>
                                                        <li><a href="https://www.irs.gov/help/ita/what-is-my-filing-status">What Is My Filing Status?</a></li>
                                                        <li><a href="https://www.irs.gov/publications/p501">Publication 501, Dependents, Standard Deduction and Filing Information</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <h6>Subcategory:</h6>
                                                <div><a href="https://www.irs.gov/faqs/filing-requirements-status-dependents/filing-status" hrefLang="en">Filing Status</a></div>
                                            </div>
                                            <div>
                                                <h6>Category:</h6>
                                                <div><a href="https://www.irs.gov/faqs/filing-requirements-status-dependents" hrefLang="en">Filing Requirements, Status, Dependents</a></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div></div>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="f">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            What should I do if I made a mistake on my federal tax return that I've already filed?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="panel-body">
                                        <div>
                                            <div>
                                                <div>
                                                    <p>It depends on the type of mistake you made:</p>
                                                    <ul>
                                                        <li>Many mathematical errors are caught during the processing of the tax return and corrected by the IRS, so you may not need to correct these mistakes.</li>
                                                        <li>If you didn't claim the correct filing status or you need to change your income, deductions, or credits, you should file an amended or corrected return using <a title="Link to About Form 1040X" href="https://www.irs.gov/forms-pubs/about-form-1040x" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="40e49abc-e11f-4aca-9c01-069d8c62963a">Form 1040-X,&nbsp; Amended U.S. Individual Income Tax Return</a>.</li>
                                                    </ul>
                                                    <p>When filing an amended or corrected return:</p>
                                                    <ul>
                                                        <li>Include copies of any forms and/or schedules that you're changing or didn't include with your original return.</li>
                                                        <li>To avoid delays, file Form 1040-X only after you've filed your original return. Generally, for a credit or refund, you must file Form 1040-X within 3 years after the date you timely filed your original return or within 2 years after the date you paid the tax, whichever is later.</li>
                                                        <li>Allow the IRS up to 16 weeks to process the amended return.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <h6>Additional Information:</h6>
                                                <div>
                                                    <ul>
                                                        <li><a href="https://www.irs.gov/taxtopics/tc308">Tax Topic 308 — Amended Returns</a></li>
                                                        <li><a href="https://www.irs.gov/help/ita/should-i-file-an-amended-return">Should I File an Amended Return? </a></li>
                                                        <li><a href="https://www.irs.gov/pub/irs-pdf/i1040x.pdf">Instructions for Form 1040-X, Amended U.S. Individual Income Tax Return</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <h6>Subcategory:</h6>
                                                <div><a href="https://www.irs.gov/faqs/irs-procedures/amended-returns-form-1040x" hrefLang="en">Amended Returns &amp; Form 1040X</a></div>
                                            </div>
                                            <div>
                                                <h6>Category:</h6>
                                                <div><a href="https://www.irs.gov/faqs/irs-procedures" hrefLang="en">IRS Procedures</a></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div></div>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="g">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            What is a split refund?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="panel-body">
                                        <div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <div>
                                                            <p>A split refund lets you divide your refund, in any proportion you want, and direct deposit the funds into up to three different accounts with U.S. financial institutions. Use Part I of&nbsp;<a title="Form 8888, Allocation of Refund (Including Savings Bond Purchases)" href="https://www.irs.gov/forms-pubs/about-form-8888" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="6d0895be-fc9e-4689-ae4a-c113f3188e3e">Form 8888, Allocation of Refund (Including Savings Bond Purchases)</a> to request to have your refund split. The accounts must be in your name. You may also use part or all of your refund to buy up to $5,000 in paper or electronic U.S. Series I Savings Bonds for yourself or someone else by using Part II of Form 8888.</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h6>Additional Information:</h6>
                                                        <div>
                                                            <ul>
                                                                <li><a href="https://www.irs.gov/refunds/frequently-asked-questions-about-splitting-federal-income-tax-refunds">Frequently Asked Questions about Splitting Federal Income Tax Refunds</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h6>Subcategory:</h6>
                                                        <div><a href="https://www.irs.gov/faqs/irs-procedures/refund-inquiries" hrefLang="en">Refund Inquiries</a></div>
                                                    </div>
                                                    <div>
                                                        <h6>Category:</h6>
                                                        <div><a href="https://www.irs.gov/faqs/irs-procedures" hrefLang="en">IRS Procedures</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="h">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            How do I know if I have to file quarterly individual estimated tax payments?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="panel-body">
                                        <div>
                                            <div>
                                                <div>
                                                    <p>Generally, you must make estimated tax payments for the current tax year if both of the following apply:</p>
                                                    <ul>
                                                        <li>You expect to owe at least $1,000 in tax for the current tax year after subtracting your withholding and refundable credits.</li>
                                                        <li>You expect your withholding and refundable credits to be less than the smaller of:
                                                            <ul>
                                                                <li>90% of the tax to be shown on your current year's tax return, or</li>
                                                                <li>100% of the tax shown on your prior year's tax return.&nbsp;(Your prior year tax return must cover all 12 months.)</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <p>There are <strong>special rules</strong> for:</p>
                                                    <ul>
                                                        <li>Farmers and fishermen</li>
                                                        <li>Certain household employers</li>
                                                        <li>Certain higher income taxpayers</li>
                                                        <li>Nonresident aliens</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <h6>Additional Information:</h6>
                                                <div>
                                                    <ul>
                                                        <li><a href="https://www.irs.gov/publications/p505/index.html">Publication 505, Tax Withholding and Estimated Tax</a></li>
                                                        <li><a href="https://www.irs.gov/pub/irs-pdf/f1040esn.pdf">Form 1040-ES (NR), U.S. Estimated Tax for Nonresident Alien Individuals</a></li>
                                                        <li><a href="https://www.irs.gov/pub/irs-pdf/f1040es.pdf">Form 1040-ES, Estimated Tax for Individuals</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <h6>Subcategory:</h6>
                                                <div><a href="https://www.irs.gov/faqs/estimated-tax/individuals" hrefLang="en">Individuals </a></div>
                                            </div>
                                            <div>
                                                <h6>Category:</h6>
                                                <div><a href="https://www.irs.gov/faqs/estimated-tax" hrefLang="en">Estimated Tax</a></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div></div>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="i">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            I retired last year and started receiving social security payments. Do I have to pay taxes on my social security benefits?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="panel-body">
                                        <div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <div>
                                                            <p>Social security benefits include monthly retirement, survivor and disability benefits. They don't include supplemental security income (SSI) payments, which aren't taxable. The net amount of social security benefits that you receive from the Social Security Administration is reported in Box 5 of Form SSA-1099, Social Security Benefit Statement, and you report that amount on line 5a of <a title="About Form 1040" href="https://www.irs.gov/forms-pubs/about-form-1040" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="d6635433-611d-474d-aea4-0f816139e0bf">Form 1040, U.S. Individual Income Tax Return</a>&nbsp;or <a title="Form 1040-SR" href="https://www.irs.gov/pub/irs-pdf/f1040s.pdf" data-entity-substitution="pup_linkit_media" data-entity-type="media" data-entity-uuid="477d487e-0c1c-4df7-9337-35f5856e1b4e">Form 1040-SR, U.S. Tax Return for Seniors (PDF)</a>. The taxable portion of the benefits that's included in your income and used to calculate your income tax liability depends on the total amount of your income and benefits for the taxable year. You report the taxable portion of your social security benefits on line 5b of Form 1040 or Form 1040-SR.</p>
                                                            <p>Your benefits may be taxable if the total of (1) one-half of your benefits, plus (2) all of your other income, including tax-exempt interest, is greater than the base amount for your filing status.</p>
                                                            <p>The base amount for your filing status is:</p>
                                                            <ul>
                                                                <li>$25,000 if you're single, head of household, or qualifying widow(er),</li>
                                                                <li>$25,000 if you're married filing separately and lived apart from your spouse for the entire year,</li>
                                                                <li>$32,000 if you're married filing jointly,</li>
                                                                <li>$0 if you're married filing separately and lived with your spouse at any time during the tax year.</li>
                                                            </ul>
                                                            <p>If you're married and file a joint return, you and your spouse must combine your incomes and social security benefits when figuring the taxable portion of your benefits. Even if your spouse didn't receive any benefits, you must add your spouse's income to yours when figuring on a joint return if any of your benefits are taxable.</p>
                                                            <p>Generally, you can figure the taxable amount of the benefits in <a title="Are My Social Security or Railroad Retirement Tier I Benefits Taxable?" href="https://www.irs.gov/help/ita/are-my-social-security-or-railroad-retirement-tier-i-benefits-taxable" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="26a37534-d725-4574-bdca-89eeffce7d18">Are My Social Security or Railroad Retirement Tier I Benefits Taxable?</a>, on a worksheet in the <a title="Instructions for Form 1040 and 1040-SR" href="https://www.irs.gov/forms-pubs/about-form-1040" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="d6635433-611d-474d-aea4-0f816139e0bf">Instructions for Form 1040 and 1040-SR</a> or in <a title="Publication 915, Social Security and Equivalent Railroad Retirement Benefits" href="https://www.irs.gov/forms-pubs/about-publication-915" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="7425394a-d70d-4487-af83-d7c2bd3c44db">Publication 915, Social Security and Equivalent Railroad Retirement Benefits</a>. However, if you made contributions to a traditional Individual Retirement Arrangement (IRA) for 2019 and you or your spouse were covered by a retirement plan at work or through self-employment,&nbsp;use the worksheets in <a title="Publication 590-A, Contributions to Individual Retirement " href="https://www.irs.gov/forms-pubs/about-publication-590-a" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="44d7399a-8c49-43d1-b73a-523b4a526edb">Publication 590-A, Contributions to Individual Retirement Arrangements (IRAs)</a>, to see if any of your social security benefits are taxable and to figure your IRA deduction.</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h6>Additional Information:</h6>
                                                        <div>
                                                            <ul>
                                                                <li><a href="https://www.irs.gov/taxtopics/tc423">Tax Topic 423 - Social Security and Equivalent Railroad Retirement Benefits</a></li>
                                                                <li><a href="https://www.irs.gov/pub/irs-pdf/p554.pdf">Publication 554, Tax Guide for Seniors</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h6>Subcategory:</h6>
                                                        <div><a href="https://www.irs.gov/faqs/social-security-income/regular-disability-benefits" hrefLang="en">Regular &amp; Disability Benefits</a></div>
                                                    </div>
                                                    <div>
                                                        <h6>Category:</h6>
                                                        <div><a href="https://www.irs.gov/faqs/social-security-income" hrefLang="en">Social Security Income</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="j">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            What are the tax changes for this year?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="panel-body">
                                        <div>
                                            <div>
                                                <div>
                                                    <p>For highlights of the tax changes for the current tax year, refer to the “What's New” section of the following:</p>
                                                    <p><b>Individuals -</b> <a title="About Form 1040" href="https://www.irs.gov/forms-pubs/about-form-1040" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="d6635433-611d-474d-aea4-0f816139e0bf">Instructions for Form 1040 and 1040-SR</a>.</p>
                                                    <p><b>Businesses - </b><a title="About Publication 15" href="https://www.irs.gov/forms-pubs/about-publication-15" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="e464cdb3-a147-46cc-bbe4-28c39d23f4ee">Publication 15 (Circular E), Employer's Tax Guide</a> or the instructions of your current business tax forms.</p>
                                                </div>
                                            </div>
                                            <div>
                                                <h6>Subcategory:</h6>
                                                <div><a href="https://www.irs.gov/faqs/irs-procedures/general-procedural-questions" hrefLang="en">General Procedural Questions</a></div>
                                            </div>
                                            <div>
                                                <h6>Category:</h6>
                                                <div><a href="https://www.irs.gov/faqs/irs-procedures" hrefLang="en">IRS Procedures</a></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div></div>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>

                </div>
            </div>
            <div className="free-trial-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="free-trial-image">
                                <img src="/images/free-trial-img.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="free-trial-content">
                                <h2>Don't see an option listed for your question?</h2>

                                <div className="btn-bigdata" style={{ marginTop: '5%' }}>
                                    <Link href="/contact">
                                        <a className="btn btn-primary">Contact Us</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default FAQ;