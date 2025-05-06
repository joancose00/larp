import { ArrowLeftIcon, ChartBarIcon, UserGroupIcon, BeakerIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Report details
const reportDetails = {
  'whale-psy-ops': {
    title: 'Whale Psy-Ops: A Retrospective',
    category: 'Market Analysis',
    date: '2024-02-15',
    author: 'Dr. Lucien Chen',
    content: `
      <h2>Executive Summary</h2>
      <p>Our latest analysis reveals unprecedented patterns in whale wallet behavior, suggesting a sophisticated psychological operation designed to manipulate market sentiment. Using our proprietary Quantum Unentanglement Influence Framework (QUIF), we've identified a series of coordinated movements that appear to be part of a larger market manipulation strategy.</p>

      <h2>Key Findings</h2>
      <ul>
        <li>Pattern of "ghost transactions" that create false volume signals</li>
        <li>Coordinated wallet movements across multiple exchanges</li>
        <li>Evidence of sentiment manipulation through social media correlation</li>
        <li>Quantum entanglement patterns in seemingly unrelated transactions</li>
      </ul>

      <h2>Methodology</h2>
      <p>Our QUIF system employs quantum-adjacent algorithms to analyze wallet behavior patterns across multiple dimensions:</p>
      <ul>
        <li>Transaction timing and frequency analysis</li>
        <li>Cross-exchange movement correlation</li>
        <li>Social media sentiment correlation</li>
        <li>Market impact assessment</li>
      </ul>

      <h2>Case Study: The February 2024 Incident</h2>
      <p>On February 10th, 2024, our system detected a series of coordinated movements across 12 major exchanges. The pattern suggested a sophisticated operation designed to create artificial market pressure. Our analysis revealed:</p>
      <ul>
        <li>72% correlation with social media sentiment shifts</li>
        <li>89% accuracy in predicting subsequent market movements</li>
        <li>Clear evidence of coordinated behavior across multiple time zones</li>
      </ul>

      <h2>Implications</h2>
      <p>This analysis suggests that whale behavior is becoming increasingly sophisticated, with clear evidence of psychological operations designed to influence market sentiment. Our QUIF system has demonstrated remarkable accuracy in predicting these movements, providing valuable insights for market participants.</p>
    `,
    metrics: {
      accuracy: '89%',
      confidence: 'High',
      impact: 'Significant'
    }
  },
  'bonkification-defi': {
    title: 'Bonkification of DeFi',
    category: 'Trend Analysis',
    date: '2024-02-10',
    author: 'Dr. Sarah Martinez',
    content: `
      <h2>Executive Summary</h2>
      <p>The emergence of meme tokens in DeFi protocols has created a fascinating new dynamic in the market. Our Narrative Vector Intelligence (NVI) system has identified a pattern we're calling "Bonkification" - the process by which meme tokens influence traditional DeFi protocols.</p>

      <h2>Key Findings</h2>
      <ul>
        <li>Meme token holders are increasingly participating in DeFi governance</li>
        <li>New protocols are emerging that blend meme culture with serious DeFi functionality</li>
        <li>Significant correlation between meme token success and DeFi protocol adoption</li>
        <li>Emergence of "meme-first" DeFi strategies</li>
      </ul>

      <h2>Methodology</h2>
      <p>Our NVI system analyzed:</p>
      <ul>
        <li>Governance participation patterns</li>
        <li>Protocol adoption rates</li>
        <li>Social media engagement metrics</li>
        <li>Token holder behavior analysis</li>
      </ul>

      <h2>Case Study: The Meme-Governance Revolution</h2>
      <p>Our analysis of recent governance proposals reveals a fascinating trend: meme token holders are increasingly influencing protocol decisions. Key observations include:</p>
      <ul>
        <li>45% increase in meme token holder participation in governance</li>
        <li>78% correlation between meme token success and protocol adoption</li>
        <li>New "meme-first" protocols showing 3x faster growth than traditional DeFi</li>
      </ul>

      <h2>Future Implications</h2>
      <p>The "Bonkification" trend suggests a fundamental shift in how DeFi protocols are developed and governed. Our analysis indicates that meme culture is becoming an integral part of DeFi's evolution, with significant implications for protocol design and governance structures.</p>
    `,
    metrics: {
      accuracy: '92%',
      confidence: 'High',
      impact: 'Transformative'
    }
  },
  'wallet-personality-types': {
    title: 'Emerging Wallet Personality Types',
    category: 'Behavioral Analysis',
    date: '2024-02-05',
    author: 'Marcus Thompson',
    content: `
      <h2>Executive Summary</h2>
      <p>Our Social Market Trading Framework (SMTF) has identified distinct personality archetypes in wallet behavior. This groundbreaking study reveals how different trading personalities manifest in on-chain activity, providing unprecedented insights into market dynamics.</p>

      <h2>Key Findings</h2>
      <ul>
        <li>Identification of 7 distinct wallet personality types</li>
        <li>Strong correlation between personality type and trading success</li>
        <li>Patterns of personality evolution over time</li>
        <li>Impact of personality types on market movements</li>
      </ul>

      <h2>Methodology</h2>
      <p>Our SMTF system analyzed:</p>
      <ul>
        <li>Transaction patterns and timing</li>
        <li>Portfolio composition changes</li>
        <li>Risk-taking behavior</li>
        <li>Social interaction patterns</li>
      </ul>

      <h2>Personality Types Identified</h2>
      <p>Our analysis revealed seven distinct personality types:</p>
      <ul>
        <li>The Quantum Gambler: High-risk, high-reward traders</li>
        <li>The Methodical Accumulator: Long-term, consistent accumulation</li>
        <li>The Social Trader: Strong correlation with social signals</li>
        <li>The Contrarian: Inverse correlation with market sentiment</li>
        <li>The Protocol Loyalist: Strong preference for specific protocols</li>
        <li>The Opportunist: Quick to capitalize on market inefficiencies</li>
        <li>The Hybrid: Complex, evolving trading strategies</li>
      </ul>

      <h2>Implications</h2>
      <p>Understanding wallet personality types provides valuable insights for:</p>
      <ul>
        <li>Protocol design and optimization</li>
        <li>Market prediction and analysis</li>
        <li>Risk assessment and management</li>
        <li>Community building and engagement</li>
      </ul>
    `,
    metrics: {
      accuracy: '95%',
      confidence: 'Very High',
      impact: 'Revolutionary'
    }
  },
  'quantum-entanglement-nft': {
    title: 'Quantum Entanglement in NFT Markets',
    category: 'NFT Analysis',
    date: '2024-02-01',
    author: 'Dr. Lucien Chen',
    content: `
      <h2>Executive Summary</h2>
      <p>Our NFT Pattern Engine (NPE) has discovered fascinating quantum-like entanglement patterns in NFT markets. This study reveals how seemingly unrelated NFT collections exhibit correlated behavior patterns, suggesting a deeper underlying market structure.</p>

      <h2>Key Findings</h2>
      <ul>
        <li>Identification of quantum-like entanglement between NFT collections</li>
        <li>Patterns of synchronized price movements across collections</li>
        <li>Evidence of non-local market effects</li>
        <li>Emergence of "quantum clusters" in NFT markets</li>
      </ul>

      <h2>Methodology</h2>
      <p>Our NPE system employed:</p>
      <ul>
        <li>Advanced pattern recognition algorithms</li>
        <li>Cross-collection correlation analysis</li>
        <li>Time-series quantum state analysis</li>
        <li>Market impact assessment</li>
      </ul>

      <h2>Case Study: The February Entanglement Event</h2>
      <p>Our analysis of the February market movements revealed:</p>
      <ul>
        <li>87% correlation between seemingly unrelated collections</li>
        <li>Clear evidence of non-local market effects</li>
        <li>Formation of distinct quantum clusters</li>
        <li>Predictable pattern of entanglement propagation</li>
      </ul>

      <h2>Implications</h2>
      <p>This discovery has significant implications for:</p>
      <ul>
        <li>NFT market prediction and analysis</li>
        <li>Collection valuation and risk assessment</li>
        <li>Market structure understanding</li>
        <li>Investment strategy development</li>
      </ul>
    `,
    metrics: {
      accuracy: '91%',
      confidence: 'High',
      impact: 'Groundbreaking'
    }
  }
}

// Server Component for the page - generates paths at build time
export function generateStaticParams() {
  return Object.keys(reportDetails).map((id) => ({
    id: id,
  }))
}

// Report Content Component
function ReportContent({ report }: { report: any }) {
  return (
    <div>
      <div className="mb-8">
        <span className="inline-block bg-blue-500/10 text-blue-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
          {report.category}
        </span>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          {report.title}
        </h1>
        <div className="flex justify-between items-center">
          <p className="text-gray-400">By {report.author}</p>
          <p className="text-gray-400">{report.date}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl">
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-1">Accuracy</p>
            <p className="text-2xl font-bold text-blue-400">{report.metrics.accuracy}</p>
          </div>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl">
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-1">Confidence</p>
            <p className="text-2xl font-bold text-blue-400">{report.metrics.confidence}</p>
          </div>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl">
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-1">Impact</p>
            <p className="text-2xl font-bold text-blue-400">{report.metrics.impact}</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-xl">
        <div 
          className="prose prose-invert prose-blue max-w-none"
          dangerouslySetInnerHTML={{ __html: report.content }}
        />
      </div>
    </div>
  )
}

export default function ReportPage({ params }: { params: { id: string } }) {
  const report = reportDetails[params.id as keyof typeof reportDetails]

  if (!report) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link 
          href="/reports"
          className="inline-flex items-center text-blue-500 hover:text-blue-400 mb-8"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to Reports
        </Link>

        <ReportContent report={report} />
      </div>
    </div>
  )
}