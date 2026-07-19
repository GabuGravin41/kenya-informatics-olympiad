import { useEditor } from "../useEditor";
import {
  StringField, TextareaField, BoolField,
  SectionHeader, Card, AddButton, ListControls, SaveBar, ImageUploadField,
} from "../FormFields";

interface SiteData {
  hero: {
    eyebrow: string; titleLine1: string; titleLine2: string; titleLine3: string;
    lede: string; primaryCta: string; secondaryCta: string;
  };
  paioCard: { eyebrow: string; title: string; body: string; cta: string };
  announcements: {
    eyebrow: string; heading: string;
    items: { date: string; tag: string; title: string; body: string; link: string; linkLabel: string }[];
  };
  mission: { eyebrow: string; heading: string; paragraphs: string[] };
  pillars: { n: string; title: string; body: string }[];
  stats: { k: string; v: string }[];
  partners: { name: string; accent: boolean }[];
  sponsors: {
    eyebrow: string; heading: string; lede: string;
    items: { name: string; logo: string; url: string }[];
  };
  donateBand: { eyebrow: string; heading: string; body: string; button: string };
  cta: { eyebrow: string; headingLead: string; headingAccent: string; button: string };
}

export function SiteEditor() {
  const { data, loading, loadError, dirty, saveStatus, saveError, setData, save } = useEditor<SiteData>("site");

  if (loading) return <EditorLoader />;
  if (loadError) return <EditorError msg={loadError} />;
  if (!data) return null;

  const set = <K extends keyof SiteData>(key: K, val: SiteData[K]) =>
    setData((d) => ({ ...d, [key]: val }));

  return (
    <div style={layout}>
      {/* Hero */}
      <SectionHeader title="Hero Section" description="Top of the home page" />
      <Card>
        <StringField label="Eyebrow" value={data.hero.eyebrow} onChange={(v) => set("hero", { ...data.hero, eyebrow: v })} />
        <div style={grid3}>
          <StringField label="Title line 1" value={data.hero.titleLine1} onChange={(v) => set("hero", { ...data.hero, titleLine1: v })} />
          <StringField label="Title line 2" value={data.hero.titleLine2} onChange={(v) => set("hero", { ...data.hero, titleLine2: v })} />
          <StringField label="Title line 3 (accent)" value={data.hero.titleLine3} onChange={(v) => set("hero", { ...data.hero, titleLine3: v })} />
        </div>
        <TextareaField label="Lede paragraph" value={data.hero.lede} onChange={(v) => set("hero", { ...data.hero, lede: v })} />
        <div style={grid2}>
          <StringField label="Primary CTA" value={data.hero.primaryCta} onChange={(v) => set("hero", { ...data.hero, primaryCta: v })} />
          <StringField label="Secondary CTA" value={data.hero.secondaryCta} onChange={(v) => set("hero", { ...data.hero, secondaryCta: v })} />
        </div>
      </Card>

      {/* PAIO Card */}
      <SectionHeader title="PAIO Announcement Card" />
      <Card>
        <StringField label="Eyebrow" value={data.paioCard.eyebrow} onChange={(v) => set("paioCard", { ...data.paioCard, eyebrow: v })} />
        <StringField label="Title" value={data.paioCard.title} onChange={(v) => set("paioCard", { ...data.paioCard, title: v })} />
        <TextareaField label="Body" value={data.paioCard.body} onChange={(v) => set("paioCard", { ...data.paioCard, body: v })} />
        <StringField label="CTA text" value={data.paioCard.cta} onChange={(v) => set("paioCard", { ...data.paioCard, cta: v })} />
      </Card>

      {/* Announcements */}
      <SectionHeader title="Announcements" description="Shown on the home page" />
      <Card>
        <div style={grid2}>
          <StringField label="Eyebrow" value={data.announcements.eyebrow} onChange={(v) => set("announcements", { ...data.announcements, eyebrow: v })} />
          <StringField label="Heading" value={data.announcements.heading} onChange={(v) => set("announcements", { ...data.announcements, heading: v })} />
        </div>
      </Card>
      {data.announcements.items.map((item, i) => (
        <Card key={i}>
          <ListControls
            index={i} total={data.announcements.items.length}
            onMoveUp={() => set("announcements", { ...data.announcements, items: moveUp(data.announcements.items, i) })}
            onMoveDown={() => set("announcements", { ...data.announcements, items: moveDown(data.announcements.items, i) })}
            onDelete={() => set("announcements", { ...data.announcements, items: removeAt(data.announcements.items, i) })}
          />
          <div style={grid2}>
            <StringField label="Date" value={item.date} onChange={(v) => set("announcements", { ...data.announcements, items: updateAt(data.announcements.items, i, { ...item, date: v }) })} />
            <StringField label="Tag" value={item.tag} onChange={(v) => set("announcements", { ...data.announcements, items: updateAt(data.announcements.items, i, { ...item, tag: v }) })} />
          </div>
          <StringField label="Title" value={item.title} onChange={(v) => set("announcements", { ...data.announcements, items: updateAt(data.announcements.items, i, { ...item, title: v }) })} />
          <TextareaField label="Body" value={item.body} rows={2} onChange={(v) => set("announcements", { ...data.announcements, items: updateAt(data.announcements.items, i, { ...item, body: v }) })} />
          <div style={grid2}>
            <StringField label="Link" value={item.link} placeholder="/register or https://..." onChange={(v) => set("announcements", { ...data.announcements, items: updateAt(data.announcements.items, i, { ...item, link: v }) })} />
            <StringField label="Link label" value={item.linkLabel} onChange={(v) => set("announcements", { ...data.announcements, items: updateAt(data.announcements.items, i, { ...item, linkLabel: v }) })} />
          </div>
        </Card>
      ))}
      <AddButton label="Add announcement" onClick={() => set("announcements", { ...data.announcements, items: [...data.announcements.items, { date: "", tag: "", title: "", body: "", link: "", linkLabel: "" }] })} />

      {/* Mission */}
      <SectionHeader title="Mission Section" />
      <Card>
        <StringField label="Eyebrow" value={data.mission.eyebrow} onChange={(v) => set("mission", { ...data.mission, eyebrow: v })} />
        <TextareaField label="Heading" value={data.mission.heading} onChange={(v) => set("mission", { ...data.mission, heading: v })} />
        {data.mission.paragraphs.map((p, i) => (
          <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
            <TextareaField label={`Paragraph ${i + 1}`} value={p} rows={3}
              onChange={(v) => set("mission", { ...data.mission, paragraphs: updateAt(data.mission.paragraphs, i, v) })} />
            <button onClick={() => set("mission", { ...data.mission, paragraphs: removeAt(data.mission.paragraphs, i) })} style={delBtn}>✕</button>
          </div>
        ))}
        <AddButton label="Add paragraph" onClick={() => set("mission", { ...data.mission, paragraphs: [...data.mission.paragraphs, ""] })} />
      </Card>

      {/* Pillars */}
      <SectionHeader title="Pillars (3 cards)" />
      {data.pillars.map((p, i) => (
        <Card key={i}>
          <ListControls index={i} total={data.pillars.length}
            onMoveUp={() => set("pillars", moveUp(data.pillars, i))}
            onMoveDown={() => set("pillars", moveDown(data.pillars, i))}
            onDelete={() => set("pillars", removeAt(data.pillars, i))}
          />
          <div style={grid2}>
            <StringField label="Number" value={p.n} onChange={(v) => set("pillars", updateAt(data.pillars, i, { ...p, n: v }))} />
            <StringField label="Title" value={p.title} onChange={(v) => set("pillars", updateAt(data.pillars, i, { ...p, title: v }))} />
          </div>
          <TextareaField label="Body" value={p.body} rows={2} onChange={(v) => set("pillars", updateAt(data.pillars, i, { ...p, body: v }))} />
        </Card>
      ))}
      <AddButton label="Add pillar" onClick={() => set("pillars", [...data.pillars, { n: "", title: "", body: "" }])} />

      {/* Stats */}
      <SectionHeader title="At-a-glance Stats" />
      <Card>
        {data.stats.map((st, i) => (
          <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
            <div style={{ flex: "0 0 120px" }}>
              <StringField label="Value" value={st.k} onChange={(v) => set("stats", updateAt(data.stats, i, { ...st, k: v }))} />
            </div>
            <div style={{ flex: 1 }}>
              <StringField label="Label" value={st.v} onChange={(v) => set("stats", updateAt(data.stats, i, { ...st, v }))} />
            </div>
            <button onClick={() => set("stats", removeAt(data.stats, i))} style={delBtn}>✕</button>
          </div>
        ))}
        <AddButton label="Add stat" onClick={() => set("stats", [...data.stats, { k: "", v: "" }])} />
      </Card>

      {/* Partners */}
      <SectionHeader title="Partners" />
      <Card>
        {data.partners.map((p, i) => (
          <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
            <div style={{ flex: 1 }}>
              <StringField label={`Partner ${i + 1} name`} value={p.name} onChange={(v) => set("partners", updateAt(data.partners, i, { ...p, name: v }))} />
            </div>
            <div style={{ paddingBottom: 2 }}>
              <BoolField label="Accent" value={p.accent} onChange={(v) => set("partners", updateAt(data.partners, i, { ...p, accent: v }))} />
            </div>
            <button onClick={() => set("partners", removeAt(data.partners, i))} style={delBtn}>✕</button>
          </div>
        ))}
        <AddButton label="Add partner" onClick={() => set("partners", [...data.partners, { name: "", accent: false }])} />
      </Card>

      {/* Sponsors */}
      <SectionHeader title="Sponsors / Logo Marquee" />
      <Card>
        <div style={grid2}>
          <StringField label="Eyebrow" value={data.sponsors.eyebrow} onChange={(v) => set("sponsors", { ...data.sponsors, eyebrow: v })} />
          <StringField label="Heading" value={data.sponsors.heading} onChange={(v) => set("sponsors", { ...data.sponsors, heading: v })} />
        </div>
        <TextareaField label="Lede" value={data.sponsors.lede} rows={2} onChange={(v) => set("sponsors", { ...data.sponsors, lede: v })} />
        {data.sponsors.items.map((sp, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: 10, padding: 12, border: "1px solid rgba(51,65,85,0.4)", borderRadius: 6, marginBottom: 12 }}>
            <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
              <div style={{ flex: 1 }}>
                <StringField label="Name" value={sp.name} onChange={(v) => set("sponsors", { ...data.sponsors, items: updateAt(data.sponsors.items, i, { ...sp, name: v }) })} />
              </div>
              <div style={{ flex: 1 }}>
                <StringField label="Website URL" value={sp.url} onChange={(v) => set("sponsors", { ...data.sponsors, items: updateAt(data.sponsors.items, i, { ...sp, url: v }) })} />
              </div>
              <button onClick={() => set("sponsors", { ...data.sponsors, items: removeAt(data.sponsors.items, i) })} style={delBtn}>✕</button>
            </div>
            <ImageUploadField
              label="Logo"
              value={sp.logo}
              onChange={(v) => set("sponsors", { ...data.sponsors, items: updateAt(data.sponsors.items, i, { ...sp, logo: v }) })}
            />
          </div>
        ))}
        <AddButton label="Add sponsor" onClick={() => set("sponsors", { ...data.sponsors, items: [...data.sponsors.items, { name: "", logo: "", url: "" }] })} />
      </Card>

      {/* Donate Band */}
      <SectionHeader title="Donation Band" />
      <Card>
        <div style={grid2}>
          <StringField label="Eyebrow" value={data.donateBand.eyebrow} onChange={(v) => set("donateBand", { ...data.donateBand, eyebrow: v })} />
          <StringField label="Heading" value={data.donateBand.heading} onChange={(v) => set("donateBand", { ...data.donateBand, heading: v })} />
        </div>
        <TextareaField label="Body" value={data.donateBand.body} rows={2} onChange={(v) => set("donateBand", { ...data.donateBand, body: v })} />
        <StringField label="Button text" value={data.donateBand.button} onChange={(v) => set("donateBand", { ...data.donateBand, button: v })} />
      </Card>

      {/* Bottom CTA */}
      <SectionHeader title="Bottom CTA" />
      <Card>
        <StringField label="Eyebrow" value={data.cta.eyebrow} onChange={(v) => set("cta", { ...data.cta, eyebrow: v })} />
        <div style={grid2}>
          <StringField label="Heading lead" value={data.cta.headingLead} onChange={(v) => set("cta", { ...data.cta, headingLead: v })} />
          <StringField label="Heading accent" value={data.cta.headingAccent} onChange={(v) => set("cta", { ...data.cta, headingAccent: v })} />
        </div>
        <StringField label="Button text" value={data.cta.button} onChange={(v) => set("cta", { ...data.cta, button: v })} />
      </Card>

      <SaveBar status={saveStatus} error={saveError ?? undefined} onSave={save} dirty={dirty} />
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function updateAt<T>(arr: T[], i: number, val: T): T[] {
  return arr.map((x, idx) => (idx === i ? val : x));
}
function removeAt<T>(arr: T[], i: number): T[] {
  return arr.filter((_, idx) => idx !== i);
}
function moveUp<T>(arr: T[], i: number): T[] {
  if (i === 0) return arr;
  const a = [...arr];
  [a[i - 1], a[i]] = [a[i], a[i - 1]];
  return a;
}
function moveDown<T>(arr: T[], i: number): T[] {
  if (i === arr.length - 1) return arr;
  const a = [...arr];
  [a[i], a[i + 1]] = [a[i + 1], a[i]];
  return a;
}

function EditorLoader() {
  return <div style={{ color: "#64748b", padding: 40, textAlign: "center" }}>Loading…</div>;
}
function EditorError({ msg }: { msg: string }) {
  return <div style={{ color: "#f87171", padding: 40, background: "rgba(239,68,68,0.05)", borderRadius: 8 }}>Error: {msg}</div>;
}

const layout: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 16, paddingBottom: 80 };
const grid2: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 };
const grid3: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 };
const delBtn: React.CSSProperties = {
  flexShrink: 0, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)",
  borderRadius: 4, color: "#f87171", fontSize: 12, padding: "6px 10px", cursor: "pointer", marginBottom: 2,
};
