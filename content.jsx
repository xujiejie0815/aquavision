// content.jsx — bilingual copy from official AquaVision text + shared mark

const COPY = {
  ja: {
    nav: {
      vision: "ビジョン", about: "会社概要", services: "コンピテンシー", works: "実績",
      tech: "テクノロジー", news: "ニュース", team: "チーム", contact: "お問い合わせ"
    },
    hero: {
      eyebrow: "AquaVision Inc.  —  Immersive XR Experiences",
      headline_en: "Dive Into\nNew Realities",
      headline_jp: "最先端のXRテクノロジーとアートを融合し、現実と仮想の境界を越える\n新しいエンターテインメントを提供するビジョン・テクノロジー・カンパニー。",
      headline_jp_sp: "最先端のXRテクノロジーとアートを融合し、\n現実と仮想の境界を越える\n新しいエンターテインメントを提供する\nビジョン・テクノロジー・カンパニー。",
      stats: [
        { v: "95%+", l: "Visitor Satisfaction" },
        { v: "XR · AI", l: "Core Stack" },
        { v: "Immersive", l: "IP × Culture" }
      ],
      scroll: "Scroll to explore"
    },
    about: {
      label: "01 / About",
      title: "About",
      statement: (<>世界遺産や人気IPを<em>XR化</em>し、都市の"スキマ時間・スキマ空間"を文化体験の舞台へと変える。テクノロジーとアートで、未来の都市型エンターテインメント市場をリードします。</>),
      body: "AquaVisionは、没入型XR体験を創造するグローバル・プロバイダーです。最先端のXRテクノロジーとアートを融合し、現実と仮想の境界を越える新しいエンターテインメントを提供しています。\n\n遊休不動産とIPコンテンツの融合によって、不動産価値の向上と都市体験の革新を同時に実現。各国の文化機関・政府・大使館・国際アート団体と連携し、歴史的建造物のデジタル保存や国際芸術祭との共同プログラムを通じて、世界の文化交流をより豊かで持続可能な形へと進化させていきます。",
      meta: [
        ["社名", "AquaVision株式会社  /  AquaVision Inc."],
        ["設立", "2024年3月"],
        ["代表者", "代表取締役CEO  Stephanie Fu（付 斯瑶）"],
        ["所在地", "〒105-6415  東京都港区虎ノ門1丁目17-1\n虎ノ門ヒルズビジネスタワー 15階"],
        ["事業", "VRコンテンツ（体験）の構築 ／ IP WORK（アーティストコラボ等） ／ VR技術を使ったブランドエクスペリエンスのデザイン"]
      ]
    },
    vision: {
      label: "VISION  /  MISSION",
      vision_h: "Dive into New Realities.",
      vision_jp: "私たちは、最新のテクノロジーとアートを融合させることで、人々が時間と空間の制約を超えて、新たな世界を探索できる未来を創造します。",
      mission_h: "Mission",
      mission_jp: "没入型体験を通じて世界中の人々に感動と驚きを提供し、新しい文化的価値を創出する。国際的なIPマネジメント、アーティストとの協業、最新技術を駆使したコンテンツ開発を通じて、未来のエンターテイメント市場を牽引していきます。"
    },
    services: {
      label: "02 / Competence",
      title: "Competence",
      lede: "世界中の資産とリソースを活用し、独創的なアイデアと最先端技術を組み合わせ、新たな文化的価値を創出します。",
      items: [
        { num: "C—01", en: "Creativity", jp: "創造力", body: "世界中の資産とリソースを活用し、独創的なアイデアと最先端技術を組み合わせ、新たな文化的価値を創出します。", tags: ["IP × Art", "Concept", "R&D"] },
        { num: "C—02", en: "Large Scale", jp: "大型スケール", body: "圧倒的なスケール感とビジュアルで、観客を魅了する没入型エンターテイメントを実現します。", tags: ["Architecture", "Production", "Spatial"] },
        { num: "C—03", en: "Multi-Sensor Immersion", jp: "没入型 × マルチセンサー", body: "リアルとバーチャルが融合するストーリーテリングと空間デザインで、映像・音響・触覚を含む五感を刺激し、観客一人ひとりに深い没入体験をもたらします。", tags: ["Spatial Audio", "Haptic", "Narrative"] },
        { num: "C—04", en: "Cutting-edge Technology", jp: "最先端テクノロジー", body: "XR・AI・インタラクティブ技術で、ストーリーをよりリアルに、より鮮明に。リアルタイムレンダリングから生成AI、立体音響、モジュール施工までを内製。", tags: ["XR", "AI", "Realtime", "Spatial Audio", "Modular"] },
        { num: "C—05", en: "Total Art", jp: "総合芸術", body: "アート、テクノロジー、建築、デザインを統合し、唯一無二のエンターテイメント空間を創り出します。", tags: ["Art", "Design", "Built Env."] },
      ]
    },
    business: {
      label: "03 / Business",
      title: "Business",
      lede: "「VISION」を軸に、XRを起点としたコンテンツ・IP・マーケティングの3領域でビジネスを展開しています。",
      items: [
        { num: "B—01", en: "VR Experience Build", jp: "VRコンテンツ（体験）の構築", body: "美術館・展覧会・施設向けの没入型XR体験を、ゼロから1まで構築します。コンセプト設計、3DCG制作、空間演出、チケッティング、運営設計までを一気通貫で内製。プラド美術館VRアート展のような大規模プロジェクトから、ブランド体験の単発設営まで、規模を問わず対応可能です。", image: "assets/vr-arena-layout.png", imageCap: "Prado VR Arena  ·  Venue layout" },
        { num: "B—02", en: "IP Work", jp: "IP WORK（アーティストコラボなど）", body: "世界的文化遺産・名画・キャラクターIPのライセンス管理から、現代アーティスト・ブランドとのコラボレーションまで。それぞれのIPが持つ独自の世界観を、XRというメディアで再解釈し、原画では到達できない感覚に変換することで、新しい鑑賞体験と新たな商業的価値を共創します。", image: "assets/ip-corridor.png", imageCap: "Prado VR  ·  Masterpiece corridor" },
        { num: "B—03", en: "VR Marketing", jp: "VRを使ったブランドエクスペリエンスのデザイン", body: "ブランドの世界観を、店舗・ポップアップ・常設施設に拡張する没入型ブランドエクスペリエンスをデザインします。商品を「説明される対象」から「身体で出会う体験」へ。来場・滞在・拡散までの動線を、VR・AR・MR で一気通貫で設計します。", image: "assets/vr-marketing.png", imageCap: "Immersive Brand Experience" }
      ]
    },
    works: {
      label: "04 / Works",
      title: "Work",
      lede: "ヒエロニムス・ボス、ベラスケスなど、名画が動き出す。革新的なデジタル技術で楽しむ、新感覚のアート体験。",
      items: [
        {
          image: "assets/work-artmasters.png",
          gallery: ["assets/work-artmasters.png", "assets/work-artmasters-3.png", "assets/work-artmasters-2.png", "assets/work-artmasters-1.png"],
          tag: "VR EXHIBITION",
          title: "Art Masters",
          jp: "プラド美術館所蔵品VR展",
          year: "2024–",
          venue: "Shanghai → Tokyo",
          tagline: "Step Inside the Masterpieces.",
          intro: "名画を「外側から見る時代」から、「内側へと旅する時代」へ。",
          body: "『Art Masters — プラド美術館所蔵品VR展』が、ついに日本へ。ヒエロニムス・ボス『快楽の園』、ディエゴ・ベラスケスなど、世界的傑作の内側にVRで入り込む、新感覚のマルチプレイ型イマーシブ体験です。\n\n伝統的な美術鑑賞のスタイルを根本から再定義し、原画では到達できない感覚を、空間・音響・身体の動きを通じて体験できます。2024年に上海で行われた初回展では来場者満足度95%以上を記録。\n\n総括プロデューサーAcciona Living & Culture、ライセンサーMuseo del Prado、後援にスペイン大使館・AECID・Cooperación Española、協力に東京タワー、共催にTKP、主催にAquaVisionが名を連ねます。",
          meta: [
            ["Producer", "Acciona Living & Culture"],
            ["Organizer", "AquaVision"],
            ["Co-Organizer", "TKP"],
            ["Cooperation", "東京タワー"],
            ["Licensor", "Museo del Prado"],
            ["First run", "Shanghai 2024 · 95%+ CSAT"]
          ]
        },
        {
          tag: "COMING SOON",
          title: "STORYDIVE THEATER",
          brand: "WAHHHHHP",
          jp: "ストーリーダイブ・シアター  ／  VRコンテンツ体験施設",
          year: "2026—",
          venue: "Tokyo (TBA)",
          tagline: "A new home for immersive storytelling.",
          intro: "ストーリーに「飛び込む」ためのVR体験劇場。現在準備中。",
          body: "AquaVisionが新たに立ち上げる、常設のVRコンテンツ体験施設「STORYDIVE THEATER — WAHHHHHP」。\n\n単発のイベント型展示ではなく、複数IPを並行運用する常設の劇場として、世界中の名作を継続的に上演し、来場者が「物語のなかへダイブする」体験を恒常的に提供します。\n\n現在準備中。続報は News よりご案内します。",
          meta: [
            ["Status", "準備中  /  Coming soon"],
            ["Format", "Permanent venue · Multi-IP"],
            ["Opening", "TBA"]
          ]
        }
      ]
    },
    tech: {
      label: "05 / Technology",
      title: "Technology",
      lede: "XR・AI・インタラクティブ。商用化の見えている技術と、まだ誰も見ていない技術を、両方扱います。",
      items: [
        { num: "T—01", en: "Volumetric Capture", jp: "ボリュメトリック撮影", k: "Reality → Volume" },
        { num: "T—02", en: "Real-time XR Rendering", jp: "リアルタイムXRレンダリング", k: "Unreal / Unity" },
        { num: "T—03", en: "Generative AI Pipeline", jp: "生成AIパイプライン", k: "Diffusion · LLM" },
        { num: "T—04", en: "Spatial Audio Design", jp: "立体音響設計", k: "Ambisonics" },
        { num: "T—05", en: "Multi-user Sync Networking", jp: "マルチユーザー同期", k: "Edge Realtime" },
        { num: "T—06", en: "Modular Sustainable Build", jp: "再利用可能なモジュール施工", k: "Recyclable / Low-energy" },
      ]
    },
    news: {
      label: "06 / News",
      title: "News",
      items: [
        { date: "2026.02.06", cat: "PARTNER", catCls: "partner", title: "株式会社MRXとの業務提携を発表。美術館・展覧会領域における新たな感動体験を共同開発。" },
        { date: "2025.12.23", cat: "MEDIA", catCls: "media", title: "TKPがVR事業に参入。AquaVisionへ出資し関連会社化（PR TIMES掲載）。" },
        { date: "2025.11.28", cat: "PARTNER", catCls: "partner", title: "株式会社ティーケーピー（TKP）と資本業務提携を締結。" },
        { date: "2024.10.01", cat: "EXHIBITION", catCls: "exhibition", title: "プラド美術館VRアート展、中国・上海にて初回展開催。来場者満足度95%以上を記録。" },
        { date: "2024.03.01", cat: "COMPANY", catCls: "company", title: "AquaVision株式会社を設立。" }
      ],
      more: "View all news"
    },
    partners: {
      label: "07 / Partners",
      title: "Partners",
      lede: "技術・流通・空間。それぞれの領域のフロントランナーと組んでいます。",
      items: [
        { name: "TKP", sub: "資本・業務提携", logo: "assets/logo-tkp.png" },
        { name: "APAMAN", sub: "Real Estate", logo: "assets/logo-apaman.png" },
        { name: "MRX", sub: "Tech Partner", logo: "assets/logo-mrx.png" }
      ]
    },
    team: {
      label: "08 / Team",
      title: "Team",
      lede: "アート、エンジニアリング、ビジネス。多国籍の少数精鋭。",
      items: [
        { role: "Founder · CEO", en: "Stephanie Fu", jp: "付 斯瑶",
          bio: "AquaVision創業者 兼 代表取締役CEO。中国・上海と東京を拠点に、テクノロジー・アート・文化遺産の交差点で事業を構築。世界的文化遺産のIPライセンスを最先端XR技術で再構築し、誰もが等しくアクセスできる「持ち運べる文化資源」を世界に届けるビジョンを掲げる。",
          tags: ["Strategy", "IP Licensing", "Global"] },
        { role: "Creative Director", en: "Aiko Sasaki", jp: "佐々木 愛子",
          bio: "演出家・アートディレクター。劇場演出・現代アート・XR体験設計の三領域を横断するキャリアを持ち、AquaVision全作品のクリエイティブ統括を担当。鑑賞者の身体感覚と感情に作用する空間設計を専門とする。",
          tags: ["Direction", "Spatial", "Narrative"] },
        { role: "Tech Lead", en: "Ryo Tanaka", jp: "田中 凌",
          bio: "リアルタイムレンダリング／生成AIパイプライン担当。Unreal Engine・Unityでの大規模マルチユーザーXR体験の設計と、エッジリアルタイム同期ネットワークの実装をリード。",
          tags: ["Unreal", "AI", "Realtime"] },
        { role: "Producer", en: "Marcus Chen", jp: "陳 馬克思",
          bio: "国際プロデューサー。美術館・文化施設との交渉、巡回展のロジスティクス、各国大使館・行政との連携を担当。北京・東京・マドリードのトリリンガル。",
          tags: ["Production", "Logistics", "Diplomacy"] }
      ]
    },
    ceo: {
      label: "MESSAGE",
      title: "代表者メッセージ",
      body: "パンデミックを経て、文化・芸術へのアクセス格差はかつてないほどに顕在化しました。高齢者、障がい者、地方居住者、経済的な制約を抱える多くの人々にとって、世界の名作に触れることは今なお遠い現実です。\n\n私たちはこの課題に対し、スペインの「プラド美術館」や「ノートルダム大聖堂」など、世界的文化遺産の知的財産を、最先端のXR技術を活用して没入型VR体験へと再構築し、誰もが等しくアクセスできる「持ち運べる文化資源」として提供しています。\n\n展示施設は、再利用可能なモジュール構造を採用し、短期設営・省エネルギー・リサイクル素材の活用により環境負荷を最小限に抑制。原画の輸送や高額な保険が不要であるため、サステナブルかつ経済的にも再現性の高い文化事業モデルとなっています。\n\n世界のXR市場は2030年に約9,400億ドル規模へ成長すると予測されており、私たちはこの分野において、すでに先行事例を持つユニークなポジションを確立しています。文化体験の普及・地域経済の活性化・教育支援・環境配慮をすべて両立させる、持続可能で国際的にも意義あるプロジェクトを推進してまいります。",
      sign_role: "代表取締役CEO",
      sign_name: "Stephanie Fu"
    },
    contact: {
      eyebrow: "Let's create something",
      line_en: <>Build the <em>next reality</em><br/>with us.</>,
      line_jp: "現実を拡張する次のプロジェクトを、一緒に。",
      cta1: "お問い合わせ",
      cta2: "採用にエントリー",
      meta: [
        ["Email", "contact@aquavision.jp"],
        ["Press", "press@aquavision.jp"],
        ["Address", "Tokyo, JP"]
      ]
    },
    footer: {
      tag: "",
      cols: [
        { h: "Site", items: [["Vision", "#vision"], ["About", "#about"], ["Competence", "#services"], ["Business", "#business"], ["Works", "#works"]] },
        { h: "Company", items: [["News", "news.html"], ["Team", "#team"], ["Partners", "#partners"], ["Recruit", "recruit.html"]] },
        { h: "Social", items: [["X", "https://x.com/AquaVisionVR"], ["Instagram", "https://www.instagram.com/artmasters.jp/"], ["LINE  (coming soon)", "#"]] }
      ],
      legal: "© 2026 AquaVision Inc.",
      privacy: "Privacy · Terms"
    }
  },

  en: {
    nav: {
      vision: "Vision", about: "About", services: "Competence", works: "Works",
      tech: "Technology", news: "News", team: "Team", contact: "Contact"
    },
    hero: {
      eyebrow: "AquaVision Inc.  —  Immersive XR Experiences",
      headline_en: "Dive Into\nNew Realities",
      headline_jp: "Fusing cutting-edge XR with art, crossing the boundary between the real and the virtual.\nA new kind of entertainment, delivered by a vision-technology company.",
      headline_jp_sp: "Fusing cutting-edge XR with art,\ncrossing the boundary between the real and virtual.\nA new kind of entertainment,\ndelivered by a vision-technology company.",
      stats: [
        { v: "95%+", l: "Visitor Satisfaction" },
        { v: "XR · AI", l: "Core Stack" },
        { v: "Immersive", l: "IP × Culture" }
      ],
      scroll: "Scroll to explore"
    },
    about: {
      label: "01 / About",
      title: "About",
      statement: (<>We turn world heritage and popular IP into <em>XR experiences</em>, transforming the in-between spaces of the city into stages for cultural experience.</>),
      body: "AquaVision is a global provider of immersive XR experiences. We fuse cutting-edge XR technology with art to deliver entertainment that crosses the boundary between the real and the virtual.\n\nBy combining underutilized real estate with IP content, we simultaneously raise property value and reinvent the urban experience. Working with cultural institutions, governments, embassies and international art organizations, we run digital preservation programs for historic buildings and co-program international art festivals — building a digital bridge for the world's cultural exchange.",
      meta: [
        ["Name", "AquaVision Inc."],
        ["Founded", "March 2024"],
        ["CEO", "Stephanie Fu  /  付 斯瑶"],
        ["HQ", "1-17-1 Toranomon, Minato-ku, Tokyo 105-6415\nToranomon Hills Business Tower 15F"],
        ["Business", "VR experience build ／ IP Work (artist & brand collaboration) ／ Designing brand experience with VR"]
      ]
    },
    vision: {
      label: "VISION  /  MISSION",
      vision_h: "Dive into New Realities.",
      vision_jp: "Fusing the latest technology with art, we create a future where people can explore new worlds beyond the constraints of time and space.",
      mission_h: "Mission",
      mission_jp: "Move and inspire people around the world through immersive experiences, and create new cultural value. Through global IP management, artist collaboration, and content development powered by cutting-edge technology, we lead the future entertainment market."
    },
    services: {
      label: "02 / Competence",
      title: "Competence",
      lede: "We combine the world's assets and resources with original ideas and cutting-edge technology to create new cultural value.",
      items: [
        { num: "C—01", en: "Creativity", jp: "Concept × original ideas", body: "Combining global assets, original ideas and cutting-edge technology to create new cultural value.", tags: ["IP × Art", "Concept", "R&D"] },
        { num: "C—02", en: "Large Scale", jp: "Overwhelming presence", body: "Captivating audiences with immersive entertainment at an architectural scale and unforgettable visuals.", tags: ["Architecture", "Production", "Spatial"] },
        { num: "C—03", en: "Multi-Sensor Immersion", jp: "Immersion × multi-sensor", body: "Storytelling and spatial design that fuse the real and the virtual. Visual, audio and haptic — a deep immersive experience for each visitor.", tags: ["Spatial Audio", "Haptic", "Narrative"] },
        { num: "C—04", en: "Cutting-edge Technology", jp: "XR · AI · interactive", body: "XR, AI and interactive tech to make stories more vivid. From real-time rendering and generative AI to spatial audio and modular installations — built in-house.", tags: ["XR", "AI", "Realtime", "Spatial Audio", "Modular"] },
        { num: "C—05", en: "Total Art", jp: "Art × tech × architecture × design", body: "Integrating art, technology, architecture and design to create one-of-a-kind entertainment spaces.", tags: ["Art", "Design", "Built Env."] },
      ]
    },
    business: {
      label: "03 / Business",
      title: "Business",
      lede: "Three business lines built around a single VISION — content, IP, and marketing, all grounded in XR.",
      items: [
        { num: "B—01", en: "VR Experience Build", jp: "Immersive XR builds", body: "End-to-end immersive XR experiences for museums, exhibitions and venues. Concept, 3DCG production, spatial direction, ticketing and on-site operation — every step handled in-house. From projects at the scale of the Prado VR Art Exhibition to one-off brand experiences.", image: "assets/vr-arena-layout.png", imageCap: "Prado VR Arena  ·  Venue layout" },
        { num: "B—02", en: "IP Work", jp: "Artist & brand collaboration", body: "From licensing world heritage, masterpieces and character IP, to collaborations with contemporary artists and brands. We reinterpret each IP's worldview through the XR medium — translating it into sensations no original artwork could reach, and co-creating new viewing experiences and new commercial value.", image: "assets/ip-corridor.png", imageCap: "Prado VR  ·  Masterpiece corridor" },
        { num: "B—03", en: "VR Marketing", jp: "Designing brand experience with VR", body: "We design immersive brand experiences that extend a brand's world into retail, pop-ups and permanent venues — turning products from 'things explained' into 'things you meet with your body.' The full journey — arrive, stay, share — is designed end-to-end through VR, AR and MR.", image: "assets/vr-marketing.png", imageCap: "Immersive Brand Experience" }
      ]
    },
    works: {
      label: "04 / Works",
      title: "Work",
      lede: "Hieronymus Bosch, Velázquez — masterpieces come alive. A new kind of art experience powered by innovative digital technology.",
      items: [
        {
          image: "assets/work-artmasters.png",
          gallery: ["assets/work-artmasters.png", "assets/work-artmasters-3.png", "assets/work-artmasters-2.png", "assets/work-artmasters-1.png"],
          tag: "VR EXHIBITION",
          title: "Art Masters",
          jp: "Prado VR Art Exhibition",
          year: "2024–",
          venue: "Shanghai → Tokyo",
          tagline: "Step Inside the Masterpieces.",
          intro: "From an era of looking at masterpieces, to an era of journeying inside them.",
          body: "'Art Masters — Prado VR Art Exhibition' finally arrives in Japan. A new multiplayer immersive experience that lets visitors step inside world masterpieces — Hieronymus Bosch's 'The Garden of Earthly Delights,' works by Diego Velázquez, and more.\n\nA fundamental redefinition of how we experience art: sensations the original canvas could never reach, delivered through space, sound and bodily motion. The first run in Shanghai (2024) recorded over 95% visitor satisfaction.\n\nGeneral Producer: Acciona Living & Culture. Licensor: Museo del Prado. Supported by the Spanish Embassy, AECID, and Cooperación Española. Cooperation: Tokyo Tower. Co-Organizer: TKP. Organizer: AquaVision.",
          meta: [
            ["Producer", "Acciona Living & Culture"],
            ["Organizer", "AquaVision"],
            ["Co-Organizer", "TKP"],
            ["Cooperation", "Tokyo Tower"],
            ["Licensor", "Museo del Prado"],
            ["First run", "Shanghai 2024 · 95%+ CSAT"]
          ]
        },
        {
          tag: "COMING SOON",
          title: "STORYDIVE THEATER",
          brand: "WAHHHHHP",
          jp: "ストーリーダイブ・シアター  /  Immersive VR Theater",
          year: "2026—",
          venue: "Tokyo (TBA)",
          tagline: "A new home for immersive storytelling.",
          intro: "A permanent VR theater built for diving into stories. Currently in preparation.",
          body: "STORYDIVE THEATER — WAHHHHHP is AquaVision's upcoming permanent VR experience venue.\n\nUnlike single-run event-style exhibitions, it runs multiple IPs in parallel as a permanent theater, programming the world's greatest stories continuously — and giving visitors a place to 'dive into the story' any time.\n\nCurrently in preparation. Stay tuned via News for updates.",
          meta: [
            ["Status", "Coming soon"],
            ["Format", "Permanent venue · Multi-IP"],
            ["Opening", "TBA"]
          ]
        }
      ]
    },
    tech: {
      label: "05 / Technology",
      title: "Technology",
      lede: "XR · AI · interactive. We work both with what is shipping today and what nobody has shipped yet.",
      items: [
        { num: "T—01", en: "Volumetric Capture", jp: "Reality captured as volume", k: "Reality → Volume" },
        { num: "T—02", en: "Real-time XR Rendering", jp: "Unreal · Unity pipelines", k: "Unreal / Unity" },
        { num: "T—03", en: "Generative AI Pipeline", jp: "Diffusion · LLM workflows", k: "Diffusion · LLM" },
        { num: "T—04", en: "Spatial Audio Design", jp: "Ambisonic mixing", k: "Ambisonics" },
        { num: "T—05", en: "Multi-user Sync Networking", jp: "Edge realtime sync", k: "Edge Realtime" },
        { num: "T—06", en: "Modular Sustainable Build", jp: "Reusable low-energy modular install", k: "Recyclable / Low-energy" },
      ]
    },
    news: {
      label: "06 / News",
      title: "News",
      items: [
        { date: "2026.02.06", cat: "PARTNER", catCls: "partner", title: "Partnership with MRX Inc. announced. Co-developing new emotional experiences for museums and exhibitions." },
        { date: "2025.12.23", cat: "MEDIA", catCls: "media", title: "TKP enters the VR business by investing in AquaVision (PR TIMES coverage)." },
        { date: "2025.11.28", cat: "PARTNER", catCls: "partner", title: "Capital and business partnership signed with TKP Inc." },
        { date: "2024.10.01", cat: "EXHIBITION", catCls: "exhibition", title: "Prado VR Art Exhibition's first run held in Shanghai. Over 95% visitor satisfaction." },
        { date: "2024.03.01", cat: "COMPANY", catCls: "company", title: "AquaVision Inc. founded." }
      ],
      more: "View all news"
    },
    partners: {
      label: "07 / Partners",
      title: "Partners",
      lede: "Tech, distribution, venue — we work with front-runners in each lane.",
      items: [
        { name: "TKP", sub: "Capital · Business", logo: "assets/logo-tkp.png" },
        { name: "APAMAN", sub: "Real Estate", logo: "assets/logo-apaman.png" },
        { name: "MRX", sub: "Tech Partner", logo: "assets/logo-mrx.png" }
      ]
    },
    team: {
      label: "08 / Team",
      title: "Team",
      lede: "Art, engineering, business — a multinational tight-knit team.",
      items: [
        { role: "Founder · CEO", en: "Stephanie Fu", jp: "付 斯瑶",
          bio: "Founder and CEO of AquaVision. Based between Shanghai and Tokyo, building a business at the intersection of technology, art and cultural heritage. Vision: rebuild the IP of world cultural heritage with cutting-edge XR technology and deliver it as a 'portable cultural resource' accessible to everyone.",
          tags: ["Strategy", "IP Licensing", "Global"] },
        { role: "Creative Director", en: "Aiko Sasaki", jp: "Aiko Sasaki",
          bio: "Director and art director. Career spanning theater direction, contemporary art and XR experience design — leads creative across all AquaVision works. Specializes in spatial design that operates on the body and emotion of the visitor.",
          tags: ["Direction", "Spatial", "Narrative"] },
        { role: "Tech Lead", en: "Ryo Tanaka", jp: "Ryo Tanaka",
          bio: "Real-time rendering and generative AI pipeline lead. Designs large-scale multi-user XR experiences in Unreal Engine and Unity, and implements edge-realtime synchronization networking.",
          tags: ["Unreal", "AI", "Realtime"] },
        { role: "Producer", en: "Marcus Chen", jp: "Marcus Chen",
          bio: "International producer. Handles negotiations with museums and cultural institutions, touring-exhibition logistics, and partnerships with embassies and governments. Trilingual (Beijing / Tokyo / Madrid).",
          tags: ["Production", "Logistics", "Diplomacy"] }
      ]
    },
    ceo: {
      label: "MESSAGE",
      title: "Message from the CEO",
      body: "After the pandemic, the inequality of access to culture and art is more visible than ever. For the elderly, the disabled, those living far from major cities, and those facing economic constraints, encountering the world's masterworks is still a distant reality.\n\nWe respond to this by taking the intellectual property of world cultural heritage — Spain's Museo del Prado, Notre-Dame Cathedral and others — and rebuilding them as immersive VR experiences using cutting-edge XR technology, offered as a 'portable cultural resource' that everyone can access on equal terms.\n\nOur exhibition facilities use a reusable modular structure that minimizes environmental impact through short build-times, low energy use, and recyclable materials. No original artworks are shipped and no expensive insurance is required — a sustainable and economically reproducible cultural model.\n\nThe global XR market is projected to grow to roughly US$940B by 2030. We have established a unique position in this field with proven precedent, and will continue to drive sustainable, internationally meaningful projects that combine cultural access, regional economic vitality, educational support and environmental responsibility.",
      sign_role: "Founder & CEO",
      sign_name: "Stephanie Fu"
    },
    contact: {
      eyebrow: "Let's create something",
      line_en: <>Build the <em>next reality</em><br/>with us.</>,
      line_jp: "Let's build the next reality together.",
      cta1: "Contact us",
      cta2: "Join our team",
      meta: [
        ["Email", "contact@aquavision.jp"],
        ["Press", "press@aquavision.jp"],
        ["Address", "Tokyo, JP"]
      ]
    },
    footer: {
      tag: "",
      cols: [
        { h: "Site", items: [["Vision", "#vision"], ["About", "#about"], ["Competence", "#services"], ["Business", "#business"], ["Works", "#works"]] },
        { h: "Company", items: [["News", "news.html"], ["Team", "#team"], ["Partners", "#partners"], ["Recruit", "recruit.html"]] },
        { h: "Social", items: [["X", "https://x.com/AquaVisionVR"], ["Instagram", "https://www.instagram.com/artmasters.jp/"], ["LINE  (coming soon)", "#"]] }
      ],
      legal: "© 2026 AquaVision Inc.",
      privacy: "Privacy · Terms"
    }
  }
};

// ---------- Brand Mark (SVG) ----------
function BrandMark({ size = 32, theme = "dark" }){
  const stroke = theme === "dark" ? "#F2F6FA" : "#0F3461";
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <defs>
        <clipPath id="bmclip">
          <circle cx="50" cy="50" r="42" />
        </clipPath>
      </defs>
      <g clipPath="url(#bmclip)">
        <path d="M -2 58 C 18 40, 34 42, 50 56 C 66 70, 82 72, 102 56 L 102 110 L -2 110 Z" fill="#D4A82A" />
        <path d="M -2 46 C 18 28, 34 30, 50 46 C 66 60, 82 62, 102 46 L 102 58 C 82 74, 66 72, 50 58 C 34 42, 18 40, -2 58 Z" fill="#2EB5E6" />
      </g>
      <circle cx="50" cy="50" r="42" stroke={stroke} strokeWidth="3" />
    </svg>
  );
}

window.COPY = COPY;
window.BrandMark = BrandMark;
