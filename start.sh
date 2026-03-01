#!/usr/bin/env bash
export PATH="/c/Users/rmcki/scoop/apps/nodejs/current:/c/Users/rmcki/scoop/apps/nodejs/current/bin:/c/Users/rmcki/scoop/shims:$PATH"

# Kill any existing process on port 3001
pid=$(cmd //c "netstat -ano" 2>/dev/null | grep ":3001 " | grep "LISTENING" | awk '{print $5}' | head -1)
if [ -n "$pid" ]; then
  taskkill //F //PID "$pid" 2>/dev/null
  sleep 1
fi

cd "$(dirname "$0")/opus" || exit 1
npx next dev --turbopack -p 3001
