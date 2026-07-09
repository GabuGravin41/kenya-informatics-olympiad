import { useEditor } from "../useEditor";
import { StringField, TextareaField, SectionHeader, Card, AddButton, ListControls, SaveBar } from "../FormFields";

interface Stat { label: string; value: string }
interface GalleryItem { image: string }
interface PastEvent {
  slug: string; date: string; location: string; tag: string; title: string;
  summary: string; cover: string;
  report: string[];
  stats: Stat[];
  gallery: GalleryItem[];
}
interface EventsData { events: PastEvent[] }

const blank = (): PastEvent => ({
  slug: "", date: "", location: "", tag: "", title: "",
  summary: "", cover: "", report: [], stats: [], gallery: [],
});
const updateAt = <T,>(arr: T[], i: number, val: T) => arr.map((x, idx) => (idx === i ? val : x));
const removeAt = <T,>(arr: T[], i: number) => arr.filter((_, idx) => idx !== i);
function moveUp<T>(arr: T[], i: number) { if (i === 0) return arr; const a = [...arr]; [a[i-1], a[i]] = [a[i], a[i-1]]; return a; }
function moveDown<T>(arr: T[], i: number) { if (i === arr.length - 1) return arr; const a = [...arr]; [a[i], a[i+1]] = [a[i+1], a[i]]; return a; }

export function EventsEditor() {
  const { data, loading, loadError, dirty, saveStatus, saveError, setData, save } = useEditor<EventsData>("events");

  if (loading) return <div style={info}>Loading…</div>;
  if (loadError) return <div style={errStyle}>Error: {loadError}</div>;
  if (!data) return null;

  const upd = (events: PastEvent[]) => setData(() => ({ events }));
  const updEv = (i: number, ev: PastEvent) => upd(updateAt(data.events, i, ev));

  return (
    <div style={layout}>
      <SectionHeader title="Past Events Archive" description="Events shown on the /events page as completed reports." />

      {data.events.map((ev, i) => (
        <Card key={i}>
          <ListControls
            index={i} total={data.events.length}
            onMoveUp={() => upd(moveUp(data.events, i))}
            onMoveDown={() => upd(moveDown(data.events, i))}
            onDelete={() => upd(removeAt(data.events, i))}
          />

          <div style={grid3}>
            <StringField label="URL slug" value={ev.slug} placeholder="open-round-2025" onChange={(v) => updEv(i, { ...ev, slug: v.toLowerCase().replace(/\s+/g, '-') })} mono />
            <StringField label="Date" value={ev.date} placeholder="15 Mar 2026" onChange={(v) => updEv(i, { ...ev, date: v })} />
            <StringField label="Location" value={ev.location} placeholder="Nairobi, Kenya" onChange={(v) => updEv(i, { ...ev, location: v })} />
          </div>
          <div style={grid2}>
            <StringField label="Tag" value={ev.tag} placeholder="Round 01" onChange={(v) => updEv(i, { ...ev, tag: v })} />
            <StringField label="Title" value={ev.title} onChange={(v) => updEv(i, { ...ev, title: v })} />
          </div>
          <TextareaField label="Summary" value={ev.summary} rows={2} onChange={(v) => updEv(i, { ...ev, summary: v })} />
          <StringField label="Cover image URL" value={ev.cover ?? ""} placeholder="/uploads/event-cover.jpg" onChange={(v) => updEv(i, { ...ev, cover: v })} />

          {/* Report paragraphs */}
          <div style={subSection}>
            <div style={subLabel}>Report paragraphs</div>
            {(ev.report ?? []).map((p, pi) => (
              <div key={pi} style={{ display: "flex", gap: 8 }}>
                <TextareaField label={`Paragraph ${pi + 1}`} value={p} rows={2}
                  onChange={(v) => updEv(i, { ...ev, report: updateAt(ev.report, pi, v) })} />
                <button onClick={() => updEv(i, { ...ev, report: removeAt(ev.report, pi) })} style={delBtn}>✕</button>
              </div>
            ))}
            <AddButton label="Add paragraph" onClick={() => updEv(i, { ...ev, report: [...(ev.report ?? []), ""] })} />
          </div>

          {/* Stats */}
          <div style={subSection}>
            <div style={subLabel}>Stats</div>
            {(ev.stats ?? []).map((st, si) => (
              <div key={si} style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
                <div style={{ flex: "0 0 120px" }}>
                  <StringField label="Value" value={st.value} onChange={(v) => updEv(i, { ...ev, stats: updateAt(ev.stats, si, { ...st, value: v }) })} />
                </div>
                <div style={{ flex: 1 }}>
                  <StringField label="Label" value={st.label} onChange={(v) => updEv(i, { ...ev, stats: updateAt(ev.stats, si, { ...st, label: v }) })} />
                </div>
                <button onClick={() => updEv(i, { ...ev, stats: removeAt(ev.stats, si) })} style={delBtn}>✕</button>
              </div>
            ))}
            <AddButton label="Add stat" onClick={() => updEv(i, { ...ev, stats: [...(ev.stats ?? []), { label: "", value: "" }] })} />
          </div>
        </Card>
      ))}

      <AddButton label="Add past event" onClick={() => upd([...data.events, blank()])} />
      <SaveBar status={saveStatus} error={saveError ?? undefined} onSave={save} dirty={dirty} />
    </div>
  );
}

const layout: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 16, paddingBottom: 80 };
const grid2: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 };
const grid3: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 };
const subSection: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 8, paddingTop: 8, borderTop: "1px solid rgba(51,65,85,0.3)" };
const subLabel: React.CSSProperties = { fontSize: 11, color: "#475569", textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: 4 };
const info: React.CSSProperties = { color: "#64748b", padding: 40, textAlign: "center" };
const errStyle: React.CSSProperties = { color: "#f87171", padding: 40, background: "rgba(239,68,68,0.05)", borderRadius: 8 };
const delBtn: React.CSSProperties = {
  flexShrink: 0, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)",
  borderRadius: 4, color: "#f87171", fontSize: 12, padding: "6px 10px", cursor: "pointer", marginBottom: 2,
};
