import {
  getSizesForBuild,
  getVariantOptions,
  SIZE_LABELS,
  LOUNGE_LABELS,
  BED_LABELS,
} from '../../content/models.js'
import './ModelConfigurator.css'

// A labelled, centred row of pill buttons — used for the size and the
// lounge / bed variant choices. Renders nothing when there is no option.
function PillRow({ label, options, value, onChange }) {
  if (options.length === 0) return null
  return (
    <div className="model-configurator__row">
      <span className="model-configurator__row-label">{label}</span>
      <div className="model-configurator__pills" role="group" aria-label={label}>
        {options.map((opt) => (
          <button
            key={opt.key}
            type="button"
            className={`model-configurator__pill${
              opt.key === value ? ' is-active' : ''
            }`}
            aria-pressed={opt.key === value}
            onClick={() => onChange(opt.key)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}

// The size and layout picker that sits above "See the layout." on the model
// page. Size is always shown; the lounge and bed variant rows only appear
// when the active build + size offers a choice. Build is handled separately
// by BuildSwitcher; state lives in ModelPage.
export default function ModelConfigurator({ model, selection, onChange }) {
  const { build, size, lounge, bed } = selection
  const sizes = getSizesForBuild(model, build)
  const { lounges, beds } = getVariantOptions(model, build, size)

  const hasVariants = lounges.length > 1 || beds.length > 1

  return (
    <div className="model-configurator">
      <PillRow
        label="Size"
        options={sizes.map((s) => ({ key: s, label: SIZE_LABELS[s] ?? s }))}
        value={size}
        onChange={(key) => onChange({ size: key })}
      />
      {hasVariants && (
        <div className="model-configurator__variants">
          {lounges.length > 1 && (
            <PillRow
              label="Lounge"
              options={lounges.map((l) => ({ key: l, label: LOUNGE_LABELS[l] ?? l }))}
              value={lounge}
              onChange={(key) => onChange({ lounge: key })}
            />
          )}
          {beds.length > 1 && (
            <PillRow
              label="Bed"
              options={beds.map((b) => ({ key: b, label: BED_LABELS[b] ?? b }))}
              value={bed}
              onChange={(key) => onChange({ bed: key })}
            />
          )}
        </div>
      )}
    </div>
  )
}
