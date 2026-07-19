import { useEditor } from "../useEditor";
import { StringField, TextareaField, SectionHeader, Card, AddButton, ListControls, SaveBar, ImageUploadField } from "../FormFields";

interface Way { title: string; body: string; detail: string }
interface Contact { label: string; value: string; href: string }
interface Institution { name: string; logo: string; url: string; note: string }
interface SupportData {
  hero: { eyebrow: string; title: string; lede: string };
  appeal: { heading: string; paragraphs: string[] };
  ways: Way[];
  contacts: Contact[];
  institutions: Institution[];
}

const updateAt = <T,>(arr: T[], i: number, val: T) => arr.map((x, idx) => (idx === i ? val : x));
const removeAt = <T,>(arr: T[], i: number) => arr.filter((_, idx) => idx !== i);
function moveUp<T>(arr: T[], i: number) { if (i === 0) return arr; const a = [...arr]; [a[i-1], a[i]] = [a[i], a[i-1]]; return a; }
function moveDown<T>(arr: T[], i: number) { if (i === arr.length - 1) return arr; const a = [...arr]; [a[i], a[i+1]] = [a[i+1], a[i]]; return a; }

export function SupportEditor() {
  const { data, loading, loadError, dirty, saveStatus, saveError, setData, save } = useEditor<SupportData>("support");

  if (loading) return <div style={info}>Loading…</div>;
  if (loadError) return <div style={errStyle}>Error: {loadError}</div>;
  if (!data) return null;

  const set = <K extends keyof SupportData>(key: K, val: SupportData[K]) => setData((d) => ({ ...d, [key]: val }));

  return (
    <div style={layout}>
      <SectionHeader title="Hero" />
      <Card>
        <StringField label="Eyebrow" value={data.hero.eyebrow} onChange={(v) => set("hero", { ...data.hero, eyebrow: v })} />
        <StringField label="Title" value={data.hero.title} onChange={(v) => set("hero", { ...data.hero, title: v })} />
        <TextareaField label="Lede" value={data.hero.lede} rows={2} onChange={(v) => set("hero", { ...data.hero, lede: v })} />
      </Card>

      <SectionHeader title="Appeal" />
      <Card>
        <StringField label="Heading" value={data.appeal.heading} onChange={(v) => set("appeal", { ...data.appeal, heading: v })} />
        {data.appeal.paragraphs.map((p, i) => (
          <div key={i} style={{ display: "flex", gap: 8 }}>
            <TextareaField label={`Paragraph ${i + 1}`} value={p} rows={2}
              onChange={(v) => set("appeal", { ...data.appeal, paragraphs: updateAt(data.appeal.paragraphs, i, v) })} />
            <button onClick={() => set("appeal", { ...data.appeal, paragraphs: removeAt(data.appeal.paragraphs, i) })} style={delBtn}>✕</button>
          </div>
        ))}
        <AddButton label="Add paragraph" onClick={() => set("appeal", { ...data.appeal, paragraphs: [...data.appeal.paragraphs, ""] })} />
      </Card>

      <SectionHeader title="Ways to Give" />
      {data.ways.map((w, i) => (
        <Card key={i}>
          <ListControls index={i} total={data.ways.length}
            onMoveUp={() => set("ways", moveUp(data.ways, i))}
            onMoveDown={() => set("ways", moveDown(data.ways, i))}
            onDelete={() => set("ways", removeAt(data.ways, i))}
          />
          <StringField label="Title" value={w.title} onChange={(v) => set("ways", updateAt(data.ways, i, { ...w, title: v }))} />
          <TextareaField label="Body" value={w.body} rows={2} onChange={(v) => set("ways", updateAt(data.ways, i, { ...w, body: v }))} />
          <StringField label="Detail (e.g. paybill / account)" value={w.detail} onChange={(v) => set("ways", updateAt(data.ways, i, { ...w, detail: v }))} />
        </Card>
      ))}
      <AddButton label="Add way to give" onClick={() => set("ways", [...data.ways, { title: "", body: "", detail: "" }])} />

      <SectionHeader title="Contacts" />
      {data.contacts.map((c, i) => (
        <Card key={i}>
          <ListControls index={i} total={data.contacts.length}
            onMoveUp={() => set("contacts", moveUp(data.contacts, i))}
            onMoveDown={() => set("contacts", moveDown(data.contacts, i))}
            onDelete={() => set("contacts", removeAt(data.contacts, i))}
          />
          <div style={grid3}>
            <StringField label="Label" value={c.label} onChange={(v) => set("contacts", updateAt(data.contacts, i, { ...c, label: v }))} />
            <StringField label="Display value" value={c.value} placeholder="you@example.com" onChange={(v) => set("contacts", updateAt(data.contacts, i, { ...c, value: v }))} />
            <StringField label="Link" value={c.href} placeholder="mailto:you@example.com" onChange={(v) => set("contacts", updateAt(data.contacts, i, { ...c, href: v }))} />
          </div>
        </Card>
      ))}
      <AddButton label="Add contact" onClick={() => set("contacts", [...data.contacts, { label: "", value: "", href: "" }])} />

      <SectionHeader title="Partnered Institutions" />
      {data.institutions.map((inst, i) => (
        <Card key={i}>
          <ListControls index={i} total={data.institutions.length}
            onMoveUp={() => set("institutions", moveUp(data.institutions, i))}
            onMoveDown={() => set("institutions", moveDown(data.institutions, i))}
            onDelete={() => set("institutions", removeAt(data.institutions, i))}
          />
          <div style={grid2}>
            <StringField label="Name" value={inst.name} onChange={(v) => set("institutions", updateAt(data.institutions, i, { ...inst, name: v }))} />
            <StringField label="Note" value={inst.note ?? ""} placeholder="Government partner" onChange={(v) => set("institutions", updateAt(data.institutions, i, { ...inst, note: v }))} />
          </div>
          <div style={grid2}>
            <ImageUploadField label="Logo" value={inst.logo ?? ""} onChange={(v) => set("institutions", updateAt(data.institutions, i, { ...inst, logo: v }))} />
            <StringField label="Website URL" value={inst.url ?? ""} placeholder="https://example.com" onChange={(v) => set("institutions", updateAt(data.institutions, i, { ...inst, url: v }))} />
          </div>
        </Card>
      ))}
      <AddButton label="Add institution" onClick={() => set("institutions", [...data.institutions, { name: "", logo: "", url: "", note: "" }])} />

      <SaveBar status={saveStatus} error={saveError ?? undefined} onSave={save} dirty={dirty} />
    </div>
  );
}

const layout: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 16, paddingBottom: 80 };
const grid2: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 };
const grid3: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 };
const info: React.CSSProperties = { color: "#64748b", padding: 40, textAlign: "center" };
const errStyle: React.CSSProperties = { color: "#f87171", padding: 40, background: "rgba(239,68,68,0.05)", borderRadius: 8 };
const delBtn: React.CSSProperties = {
  flexShrink: 0, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)",
  borderRadius: 4, color: "#f87171", fontSize: 12, padding: "6px 10px", cursor: "pointer", marginBottom: 2,
};
