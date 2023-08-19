import { PostArticle } from '../src';

export default {
  title: 'Blog/PostArticle',
  component: PostArticle,
  tags: ['autodocs'],
};

const CONTENT = `
<article><h1>Money in the Digital Era: A Transformation Fueled by Technology</h1><h4>2023-04-09</h4><div><p>For centuries, money has been a medium of exchange, a unit of account, and a store of value. From barter systems to coins made of precious metals, our understanding and usage of money have undergone numerous transformations. The essence, however, remained the same: trust in the system.</p>
<h2 id="enter-the-age-of-plastic"><a aria-hidden="true" tabindex="-1" href="#enter-the-age-of-plastic"></a><a href="#enter-the-age-of-plastic" style="margin-right: 10px">#</a>Enter: The Age of Plastic</h2>
<p>With the advent of <strong>credit cards</strong> in the 20th century, money saw one of its most significant shifts. Physical cash was no longer the only means of transaction. Convenience, safety, and global acceptance made these pieces of plastic an instant hit.</p>
<h2 id="the-digital-evolution-mobile-payments-and-e-wallets"><a aria-hidden="true" tabindex="-1" href="#the-digital-evolution-mobile-payments-and-e-wallets"></a><a href="#the-digital-evolution-mobile-payments-and-e-wallets" style="margin-right: 10px">#</a>The Digital Evolution: Mobile Payments and E-wallets</h2>
<p>Fast forward to the 21st century, smartphones and the internet brought about the era of <strong>digital wallets</strong> and <strong>mobile payments</strong>. With a few taps on a screen, funds could be transferred, bills paid, and goods purchased. Regions previously devoid of banking infrastructure embraced mobile money, driving financial inclusion.</p>
<h2 id="cryptocurrencies-disrupting-the-status-quo"><a aria-hidden="true" tabindex="-1" href="#cryptocurrencies-disrupting-the-status-quo"></a><a href="#cryptocurrencies-disrupting-the-status-quo" style="margin-right: 10px">#</a>Cryptocurrencies: Disrupting the Status Quo</h2>
<p>Bitcoin's emergence in 2009 introduced a paradigm shift. Built on blockchain, <strong>cryptocurrencies</strong> are decentralized and promise transparency, reduced transaction costs, and freedom from traditional banking systems. While debates about their viability as "real money" continue, their influence is undeniable.</p>
<h2 id="future-of-money-where-do-we-go-from-here"><a aria-hidden="true" tabindex="-1" href="#future-of-money-where-do-we-go-from-here"></a><a href="#future-of-money-where-do-we-go-from-here" style="margin-right: 10px">#</a>Future of Money: Where Do We Go from Here?</h2>
<p>As we stand at this crossroads, the future of money seems to be intertwined with technological advancements. Concepts like <strong>Central Bank Digital Currencies (CBDCs)</strong> and <strong>tokenized assets</strong> are being explored. Trust, however, remains the cornerstone. As money becomes increasingly digital, ensuring security, privacy, and accessibility will be paramount.</p>
<h2 id="in-conclusion"><a aria-hidden="true" tabindex="-1" href="#in-conclusion"></a><a href="#in-conclusion" style="margin-right: 10px">#</a>In Conclusion</h2>
<p>From tangible coins to bits and bytes, the journey of money is a testament to human ingenuity and adaptability. As we continue to innovate, our relationship with money, wealth, and value will evolve, heralding new possibilities and challenges.</p></div></article>

<article><h1>Transfer Learning: The Shortcut in AI Training</h1><h4>2023-04-08</h4><div><p>In traditional AI model training, a neural network learns from scratch. But what if we could give it a head-start? Enter Transfer Learning. In this approach, models pretrained on one task are fine-tuned for a different but related task. Essentially, the AI leverages knowledge from a prior training session for a new task.</p>
<h2 id="why-the-buzz-around-transfer-learning"><a aria-hidden="true" tabindex="-1" href="#why-the-buzz-around-transfer-learning"></a><a href="#why-the-buzz-around-transfer-learning" style="margin-right: 10px">#</a>Why the Buzz around Transfer Learning?</h2>
<ol>
<li>Efficiency: Training deep neural networks demands time and computational resources. Transfer learning dramatically reduces this by leveraging pre-existing models.</li>
<li>Less Data: Often, we don't have vast labeled datasets for every task. Transfer learning allows us to achieve high performance even with smaller datasets.</li>
<li>Versatility: From image recognition to natural language processing, transfer learning is proving its mettle across domains.</li>
</ol>
<h2 id="real-world-applications"><a aria-hidden="true" tabindex="-1" href="#real-world-applications"></a><a href="#real-world-applications" style="margin-right: 10px">#</a>Real-world Applications</h2>
<p><strong>Healthcare</strong>: In medical imaging, where labeled data is scarce, transfer learning aids in diagnosing diseases from X-rays and MRI scans with higher accuracy.</p>
<p><strong>Natural Language Processing</strong>: Pretrained models like OpenAI's GPT series or BERT from Google use transfer learning. These models, initially trained on massive text datasets, can be fine-tuned for specific tasks like sentiment analysis or question-answering with relatively little data.</p>
<h2 id="challenges-ahead"><a aria-hidden="true" tabindex="-1" href="#challenges-ahead"></a><a href="#challenges-ahead" style="margin-right: 10px">#</a>Challenges Ahead</h2>
<p>Like all techniques, transfer learning isn't a silver bullet. There's the risk of negative transfer, where the knowledge from the source task harms performance on the target task. Ensuring relevance between source and target tasks is crucial.</p>
<h2 id="to-conclude"><a aria-hidden="true" tabindex="-1" href="#to-conclude"></a><a href="#to-conclude" style="margin-right: 10px">#</a>To Conclude</h2>
<p>Transfer learning exemplifies AI's potential, turning challenges into opportunities. As AI continues its march into diverse fields, techniques like transfer learning will be pivotal in democratizing its benefits.</p></div></article>
`;

export const Default = () => (
  <div style={{ maxWidth: '940px' }}>
    <PostArticle content={CONTENT} image={<img src="https://picsum.photos/id/349/800/500" alt="post" />} />
  </div>
);
