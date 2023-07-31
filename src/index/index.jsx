import './index.css';

const cardData = [
  { year: 2023, body: 'iOS 17, iPadOS 17, macOS 14, watchOS 10, tvOS 17, visionOS 1' },
  { year: 2022, body: 'iOS 16, iPadOS 16, macOS 13, watchOS 9, tvOS 16' },
  { year: 2021, body: 'iOS 15, iPadOS 15, macOS 12, watchOS 8, tvOS 15' },
  { year: 2020, body: 'iOS 14, iPadOS 14, macOS 11, watchOS 7, tvOS 14' },
  { year: 2019, body: 'iOS 13, iPadOS 13, macOS 10.15, watchOS 6, tvOS 13' },
  { year: 2018, body: 'iOS 12, macOS 10.14, watchOS 5, tvOS 12' },
  { year: 2017, body: 'iOS 11, macOS 10.13, watchOS 4, tvOS 11' },
  { year: 2016, body: 'iOS 10, macOS 10.12, watchOS 3, tvOS 10' },
  { year: 2015, body: 'iOS 9, OS X 10.11, watchOS 1, watchOS 2, tvOS 9' },
  { year: 2014, body: 'iOS 8, OS X 10.10, Apple TV Software 7' },
  { year: 2013, body: 'iOS 7, OS X 10.9, Apple TV Software 6' },
  { year: 2012, body: 'iOS 6, OS X 10.8, Apple TV Software 5' },
  { year: 2011, body: 'iOS 5, Mac OS X 10.7' },
  { year: 2010, body: 'iOS 4, Apple TV Software 4' },
  { year: 2009, body: 'iPhoneOS 3, Mac OS X 10.6' },
  { year: 2008, body: 'iPhoneOS 2' },
  { year: 2007, body: 'iPhoneOS 1, Mac OS X 10.5' },
  { year: '🐒', body: 'Ancient Times' },
];

function Card(props) {
  const { title, body } = props || {};
  return (
    <div className="card">
      <div className="title-text">{title}</div>
      <div className="body-text">{body}</div>
    </div>
  );
}

export default function Index() {
  return cardData.map(({ year, body }) => <Card title={year} body={body} />);
}
