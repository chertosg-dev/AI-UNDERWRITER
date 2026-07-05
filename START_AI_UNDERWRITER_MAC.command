#!/bin/bash
cd "$(dirname "$0")"
echo "AI Underwriter running locally."
echo "Open on this Mac: http://localhost:8000"
echo "For iPhone on same Wi‑Fi, use your Mac IP with :8000"
echo "Example: http://192.168.1.15:8000"
echo "Press Ctrl+C to stop."
python3 -m http.server 8000
