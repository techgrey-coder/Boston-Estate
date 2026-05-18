"use client";

import { BiSearch } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

type ResultItem = {
  id: string;
  label: string;
  type: "Location" | "Property" | "Agent";
  weight?: number;
};
type LocationItem = {
  id: string;
  label: string;
  type: "Location";
  weight: number;
};

const RECENT_KEY = "recent_searches";

const didYouMeanMap: Record<string, string> = {
  lagos: "Lagos State",
  lag: "Lagos State",
  abuja: "FCT Abuja",
  abj: "FCT Abuja",
  fct: "FCT Abuja",
  river: "Rivers State",
  port: "Port Harcourt, Rivers",
  lekki: "Lekki, Lagos",
  ikeja: "Ikeja, Lagos",
  ana: "Akwa, Anambra",
  oni: "Onitsha, Anambra",
  kub: "Kubwa, Abuja",
  dut: "Dutse, Abuja",
};

const getDidYouMean = (query: string) => {
  const key = query.toLowerCase();
  return Object.keys(didYouMeanMap)
    .filter((k) => key.includes(k))
    .map((k) => didYouMeanMap[k]);
};
const NIGERIA_LOCATIONS: LocationItem[] = [
  // 🧠 HIGH PRIORITY STATES (SMART RANKING)
  { id: "lagos", label: "Lagos State", type: "Location", weight: 100 },
  { id: "abuja", label: "FCT Abuja", type: "Location", weight: 95 },
  { id: "rivers", label: "Rivers State", type: "Location", weight: 90 },

  // 📍 LAGOS CITIES
  { id: "lagos-ikeja", label: "Ikeja, Lagos", type: "Location", weight: 85 },
  { id: "lagos-lekki", label: "Lekki, Lagos", type: "Location", weight: 85 },
  { id: "lagos-yaba", label: "Yaba, Lagos", type: "Location", weight: 85 },

  // 📍 ABUJA DISTRICTS
  { id: "abuja-maitama", label: "Maitama, Abuja", type: "Location", weight: 85 },
  { id: "abuja-wuse", label: "Wuse, Abuja", type: "Location", weight: 85 },
  { id: "abuja-gwarinpa", label: "Gwarinpa, Abuja", type: "Location", weight: 85 },
  { id: "abuja-kubwa", label: "Kubwa, Abuja", type: "Location", weight: 85 },
  { id: "abuja-dutse", label: "Dutse, Abuja", type: "Location", weight: 85 },

  // 📍 RIVERS CITIES
  { id: "rivers-portharcourt", label: "Port Harcourt, Rivers", type: "Location", weight: 85 },
  { id: "anambra-onitsha", label: "Onitsha, Anambra", type: "Location", weight: 85 },
  { id: "anambra-awka", label: "Anambra, Awka", type: "Location", weight: 85 },

  // 🌍 OTHER STATES (sample extended pattern)
  { id: "ogun-abeokuta", label: "Abeokuta, Ogun", type: "Location", weight: 70 },
  { id: "oyo-ibadan", label: "Ibadan, Oyo", type: "Location", weight: 70 },
  { id: "cross-river", label: "Cross River", type: "Location", weight: 70 },
  { id: "delta-asaba", label: "Delta, Asaba", type: "Location", weight: 70 },
  { id: "ebonyi-abakilike", label: "Ebonyi, Abakilike", type: "Location", weight: 70 },
  { id: "edo-benin", label: "Edo, Benin-City", type: "Location", weight: 70 },
  { id: "enugu-state", label: "Enugu State", type: "Location", weight: 70 },
  { id: "imo-owerri", label: "Imo, Owerri", type: "Location", weight: 70 },
];

const fakeApiSearch = async (query: string): Promise<ResultItem[]> => {
  await new Promise((r) => setTimeout(r, 500));

  const normalized = query.toLowerCase();

  // 📍 LOCATION SEARCH (ranked)
  const locationResults = NIGERIA_LOCATIONS
    .filter((item) => item.label.toLowerCase().includes(normalized))
    .sort((a, b) => b.weight - a.weight);

  // 🧠 MOCK PROPERTY + AGENT DATA
  const data: ResultItem[] = [
    { id: "1", label: "Luxury Duplex Maitama", type: "Property" },
    { id: "2", label: "Lekki Phase 1 Apartment", type: "Property" },
    { id: "3", label: "John Real Estate Agent", type: "Agent" },
    { id: "4", label: "Sarah Property Consultant", type: "Agent" },
  ];

  const otherResults = data.filter((item) =>
    item.label.toLowerCase().includes(normalized)
  );

  return [...locationResults, ...otherResults];
};


export function SearchSection({
  isSearch,
  setIsSearch,
}: {
  isSearch: boolean;
  setIsSearch: (val: boolean) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ResultItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [recent, setRecent] = useState<ResultItem[]>([]);

  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(RECENT_KEY);
    if (stored) setRecent(JSON.parse(stored));
  }, []);

  useEffect(() => {
    if (isSearch) inputRef.current?.focus();
  }, [isSearch]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      const res = await fakeApiSearch(query);
      setResults(res);
      setLoading(false);
    }, 450);
  }, [query]);

  const saveRecent = (item: ResultItem) => {
    const updated = [item, ...recent.filter((r) => r.id !== item.id)].slice(
      0,
      5
    );
    setRecent(updated);
    localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
  };
  const didYouMean = getDidYouMean(query);
  const grouped = results.reduce<Record<string, ResultItem[]>>((acc, item) => {
    if (!acc[item.type]) acc[item.type] = [];
    acc[item.type].push(item);
    return acc;
  }, {});

  return (
    <>
      <button
        onClick={() => setIsSearch(!isSearch)}
        className="p-3 bg-[rgb(0,27,10)] w-10 h-10 ml-4 hover:bg-green-800 text-white rounded-lg z-30"
      >
        {isSearch ? <IoClose size={12} /> : <BiSearch size={12} />}
      </button>

      <div
        className={`absolute top-0 left-0 h-full flex items-center px-3 z-20
        transition-all duration-500 ease-in-out
        ${isSearch ? "w-full opacity-100 bg-background lg:bg-transparent" : "w-0 opacity-0 pointer-events-none"}
        `}
      >
        {/* INPUT */}
        <div
          className={`relative w-full transition-all duration-500
          ${isSearch ? "max-w-full" : "max-w-0"}
          xl:max-w-[360px]`}
        >

          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search properties, locations, agents..."
            className="w-full p-3 pr-12 bg-white text-center rounded-lg shadow-md border text-green-900 outline-none"
          />

          <BiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-green-800" />

          {loading && (
            <div className="absolute right-10 top-1/2 -translate-y-1/2">
              <div className="w-4 h-4 border-2 border-green-700 border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* DROPDOWN */}
          {(results.length > 0 || (!query && recent.length > 0)) && (
            <div className="absolute z-50 mt-2 w-full bg-white rounded-lg shadow-xl border max-h-72 overflow-y-auto scroll-smooth
      snap-x snap-mandatory
      no-scrollbar
      cursor-grab active:cursor-grabbing">

              {!query && recent.length > 0 && (
                <div className="p-2">
                  <p className="text-xs text-gray-500 mb-2">Recent searches</p>
                  {recent.map((item) => (
                    <div
                      key={`${item.type}-${item.id}-${item.label}`}
                      onClick={() => setQuery(item.label)}
                      className="p-2 text-sm text-[rgb(0,27,11)] hover:bg-gray-100 cursor-pointer rounded"
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
              {query && didYouMean.length > 0 && (
                <div className="p-2 border-b bg-yellow-50">
                  <p className="text-xs text-gray-500 mb-1">Did you mean?</p>

                  {didYouMean.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => setQuery(item)}
                      className="text-sm text-yellow-800 cursor-pointer hover:underline"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}

              {query && (
                <div>
                  {["Location", "Property", "Agent"].map((type) => (
                    grouped[type]?.length ? (
                      <div key={type} className="p-2">
                        <p className="text-xs font-semibold text-gray-500 mb-1">
                          {type}
                        </p>

                        {grouped[type].map((item) => (
                          <div
                            key={`${item.type}-${item.id}-${item.label}`}
                            onClick={() => {
                              setQuery(item.label);
                              saveRecent(item);
                              setResults([]);
                            }}
                            className="p-2 text-sm text-green-900 hover:bg-green-50 cursor-pointer rounded"
                          >
                            {item.label}
                          </div>
                        ))}
                      </div>
                    ) : null
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}